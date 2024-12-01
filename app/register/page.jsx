"use client";

import { register } from "@/lib/actions/register";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    if (!userDetails.email || !userDetails.password || !userDetails.name)
      return alert("Missing required fields");

    setSubmitting(true);

    const result = await register(userDetails);

    if (result.success) {
      alert("Registered successfully");
      setUserDetails({ email: "", password: "", name: "" });
    } else {
      alert(result.error || "Error registering user");
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setUserDetails({ ...userDetails, name: e.target.value })
        }
        value={userDetails.name}
      />
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
