import React, { useState } from "react";

const SignUpPage = ({ onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between signup and login
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Signup validation: passwords must match
    if (isSignUp && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log(`${isSignUp ? "Signup" : "Login"} form submitted:`, formData);

    // Update authentication state and trigger redirect in parent component
    onAuthSuccess(); // Call onAuthSuccess to set authenticated state in App.js
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1e1e]">
      <div className="max-w-md w-full bg-[#2c2c2c] p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          {isSignUp ? "Sign Up" : "Log In"}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#dcdcdc]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-[#333333] bg-[#333333] text-[#dcdcdc] rounded-lg shadow-sm focus:outline-none focus:ring-0"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-[#dcdcdc]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-[#333333] bg-[#333333] text-[#dcdcdc] rounded-lg shadow-sm focus:outline-none focus:ring-0"
              required
            />
          </div>
          {isSignUp && (
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#dcdcdc]">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-[#333333] bg-[#333333] text-[#dcdcdc] rounded-lg shadow-sm focus:outline-none focus:ring-0"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-[#4e4e4e] text-white py-2 px-4 rounded-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-[#dcdcdc]">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-white underline hover:text-[#5a5a5a]"
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
