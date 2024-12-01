"use server";

import { UserModel } from "@/models/User";
import bcrypt from "bcrypt";
import { connectDB } from "../db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export const register = async (data) => {
  const session = await getServerSession(authOptions);

  if (!session || !session?.user) {
    return { success: false, error: "Session not found" };
  }

  if (session.user.role !== "admin") {
    return { success: false, error: "Unauthorized" };
  }

  await connectDB();

  const { name, email, password } = data;

  if (!name || !email || !password) {
    return { success: false, error: "Missing required fields" };
  }

  const exisitingUser = await UserModel.findOne({ email });

  if (exisitingUser) {
    return { success: false, error: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 7);

  const role = email === process.env.ADMIN_EMAIL ? "admin" : "user";

  try {
    await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
