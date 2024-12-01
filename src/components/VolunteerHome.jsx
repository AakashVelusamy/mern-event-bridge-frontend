import React from "react";
import { Link } from "react-router-dom";

const VolunteerHome = ({ events }) => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] p-6">
      <div className="max-w-6xl mx-auto bg-[#2c2c2c] shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Available Events</h1>
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="bg-[#333333] p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{event.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">{event.name}</h2> {/* Event name above description */}
                  <p className="text-[#dcdcdc]">{event.description}</p> {/* Description below name */}
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <Link
                  to={`/event-details/${event.id}`}
                  className="bg-[#4e4e4e] text-white py-2 px-4 rounded-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerHome;
