"use client";

import { register } from "@/lib/actions/register";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiUserPlus } from "react-icons/fi";
import { Toaster, toast } from "react-hot-toast";

const RegisterPage = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    if (!userDetails.email || !userDetails.password || !userDetails.name) {
      toast.error("Missing required fields");
      return;
    }

    setSubmitting(true);

    const result = await register(userDetails);

    setSubmitting(false);

    if (result.success) {
      toast.success("Registered successfully");
      setUserDetails({ email: "", password: "", name: "" });
      router.replace("/login"); // Redirect to login page after successful registration
    } else {
      toast.error(result.error || "Error registering user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <motion.div
        className="w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
            value={userDetails.name}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            value={userDetails.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            value={userDetails.password}
          />
        </div>
        <motion.button
          onClick={handleRegister}
          disabled={submitting}
          className="w-full mt-6 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold flex items-center justify-center space-x-2 transition duration-300 disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {submitting ? (
            <span>Registering...</span>
          ) : (
            <>
              <FiUserPlus className="text-lg" />
              <span>Register</span>
            </>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
