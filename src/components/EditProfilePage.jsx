import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
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
    // Here you can replace this with an API call to fetch the user's existing data.
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Here you can add API logic to save the data
    console.log("Profile updated:", userData);
    navigate("/profile"); // Redirect back to the Profile page
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center">
      <div className="max-w-md w-full bg-[#2c2c2c] p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Edit Profile</h2>

        <div className="space-y-6">
          {/* Name */}
          <div className="flex justify-between items-center">
            <label htmlFor="name" className="text-sm font-medium text-[#dcdcdc]">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
            />
          </div>

          {/* Name */}
          <div className="flex justify-between items-center">
            <label htmlFor="name" className="text-sm font-medium text-[#dcdcdc]">Roll Number</label>
            <input
              type="text"
              id="rollno"
              name="rollno"
              value={userData.rollno}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
            />
          </div>

          {/* Name */}
          <div className="flex justify-between items-center">
            <label htmlFor="name" className="text-sm font-medium text-[#dcdcdc]">Course</label>
            <input
              type="text"
              id="course"
              name="course"
              value={userData.course}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
            />
          </div>

          {/* Batch */}
          <div className="flex justify-between items-center">
            <label htmlFor="age" className="text-sm font-medium text-[#dcdcdc]">Batch</label>
            <input
              type="number"
              id="batch"
              name="batch"
              value={userData.batch}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex justify-between items-center">
            <label htmlFor="dob" className="text-sm font-medium text-[#dcdcdc]">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={userData.dob}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
            />
          </div>

          {/* Email */}
          <div className="flex justify-between items-center">
            <label htmlFor="email" className="text-sm font-medium text-[#dcdcdc]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-center">
          <button
            className="w-full bg-[#4e4e4e] text-white py-2 px-4 rounded-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
