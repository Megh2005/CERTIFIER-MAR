"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!userDetails.email || !userDetails.password)
      return alert("Please enter email and password");

    setSubmitting(true);

    const result = await signIn("credentials", {
      redirect: false,
      email: userDetails.email,
      password: userDetails.password,
    });

    setSubmitting(false);

    if (result?.error) {
      alert(result.error);
    }

    if (result?.ok) {
      alert("Logged in successfully");
      router.replace("/generate");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setUserDetails({ ...userDetails, email: e.target.value })
        }
        value={userDetails.email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setUserDetails({ ...userDetails, password: e.target.value })
        }
        value={userDetails.password}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
