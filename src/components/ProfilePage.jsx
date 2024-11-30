import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    age: 28,
    dob: "1996-08-15",
    email: "johndoe@example.com",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Here you can replace this with an API call to fetch real user data.
  }, []);

  const handleEditProfile = () => {
    navigate("/edit-profile"); // Redirect to EditProfilePage
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center">
      <div className="max-w-md w-full bg-[#2c2c2c] p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Profile</h2>

        <div className="space-y-6">
          {/* Name */}
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-[#dcdcdc]">Name</label>
            <p className="text-lg text-white">{userData.name}</p>
          </div>

          {/* Age */}
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-[#dcdcdc]">Age</label>
            <p className="text-lg text-white">{userData.age}</p>
          </div>

          {/* Date of Birth */}
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-[#dcdcdc]">Date of Birth</label>
            <p className="text-lg text-white">{userData.dob}</p>
          </div>

          {/* Email */}
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-[#dcdcdc]">Email</label>
            <p className="text-lg text-white">{userData.email}</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-8 flex justify-center">
          <button
            className="w-full bg-[#4e4e4e] text-white py-2 px-4 rounded-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
