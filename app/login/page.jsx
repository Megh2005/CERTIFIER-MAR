"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiLogIn } from "react-icons/fi";
import { Toaster, toast } from "react-hot-toast";

const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!userDetails.email || !userDetails.password) {
      toast.error("Please enter email and password");
      return;
    }

    setSubmitting(true);

    const result = await signIn("credentials", {
      redirect: false,
      email: userDetails.email,
      password: userDetails.password,
    });

    setSubmitting(false);

    if (result?.error) {
      toast.error(result.error);
    }

    if (result?.ok) {
      toast.success("Logged in successfully");
      router.replace("/about");
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
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            value={userDetails.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            value={userDetails.password}
          />
        </div>
        <motion.button
          onClick={handleLogin}
          disabled={submitting}
          className="w-full mt-6 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center justify-center space-x-2 transition duration-300 disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {submitting ? (
            <span>Authenticating...</span>
          ) : (
            <>
              <FiLogIn className="text-lg" />
              <span>Login</span>
            </>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LoginPage;
