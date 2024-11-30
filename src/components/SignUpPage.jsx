import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = ({ onSignUpSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for signup logic (API call, validation, etc.)
    console.log("Signup form submitted:", { email, password });

    // Simulate signup success
    onSignUpSuccess(); // Update authentication state in App
    navigate("/"); // Redirect to VolunteerHome page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1e1e]">
      <div className="max-w-md w-full bg-[#2c2c2c] p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#dcdcdc]">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-[#dcdcdc]">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4e4e4e] text-white py-2 px-4 rounded-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
