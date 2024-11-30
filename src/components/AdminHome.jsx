import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-[#2c2c2c] p-6 rounded-lg shadow-lg">
        {/* Button Container - Grid Layout (SWOT Analysis Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Create Event Button */}
          <Link
            to="/create-event"
            className="bg-[#4e4e4e] text-white py-14 px-16 rounded-lg shadow-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a] text-3xl font-semibold flex items-center justify-center"
          >
            Create Event
          </Link>

          {/* Event Dashboard Button */}
          <Link
            to="/event-dashboard"
            className="bg-[#4e4e4e] text-white py-14 px-16 rounded-lg shadow-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a] text-3xl font-semibold flex items-center justify-center"
          >
            Event Dashboard
          </Link>

          {/* Manage Events Button */}
          <Link
            to="/manage-events"
            className="bg-[#4e4e4e] text-white py-14 px-16 rounded-lg shadow-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a] text-3xl font-semibold flex items-center justify-center"
          >
            Manage Events
          </Link>

          {/* Messages Button */}
          <Link
            to="/messages"
            className="bg-[#4e4e4e] text-white py-14 px-16 rounded-lg shadow-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a] text-3xl font-semibold flex items-center justify-center"
          >
            Messages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
