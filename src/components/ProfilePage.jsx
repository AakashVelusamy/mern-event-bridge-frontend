import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "Aakash Velusamy",
    rollno: "23PT01",
    course: "M.Sc Theoretical Computer Science",
    batch: 2023,
    dob: "04-06-2005",
    email: "23pt01@psgtech.ac.in",
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
        
          {/* Name */}
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-[#dcdcdc]">Roll Number</label>
            <p className="text-lg text-white">{userData.rollno}</p>
          </div>

          {/* Age */}
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-[#dcdcdc]">Course</label>
            <p className="text-lg text-white">{userData.course}</p>
          </div>

          {/* Age */}
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-[#dcdcdc]">Batch</label>
            <p className="text-lg text-white">{userData.batch}</p>
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
