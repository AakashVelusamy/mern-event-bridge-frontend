import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventDashboard = () => {
  const [eventType, setEventType] = useState("upcoming");

  // Placeholder events for each type
  const events = {
    upcoming: [
      { id: 1, title: "Tree Plantation Drive", description: "Join us for a fun-filled day planting trees in Central Park!", icon: "🌳" },
      { id: 2, title: "Beach Cleanup", description: "Help us clean the beach and make a positive impact!", icon: "🏖️" },
    ],
    current: [
      { id: 3, title: "Blood Donation Drive", description: "Donate blood and save lives!", icon: "🩸" },
      { id: 4, title: "Cooking for a Cause", description: "Join us to cook meals for the homeless!", icon: "🍳" },
    ],
    over: [
      { id: 5, title: "Toy Donation Drive", description: "We collected toys for children in need.", icon: "🧸" },
      { id: 6, title: "Charity Run", description: "Our charity run was a huge success!", icon: "🏃‍♂️" },
    ],
  };

  const handleEventTypeChange = (type) => {
    setEventType(type);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] p-6">
      <div className="max-w-6xl mx-auto bg-[#2c2c2c] shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Event Dashboard</h1>

        {/* Buttons to switch event types */}
        <div className="mb-6 flex justify-center space-x-4">
          <button
            className={`py-2 px-4 rounded-lg ${eventType === "upcoming" ? "bg-green-500" : "bg-[#444444]"}`}
            onClick={() => handleEventTypeChange("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${eventType === "current" ? "bg-blue-500" : "bg-[#444444]"}`}
            onClick={() => handleEventTypeChange("current")}
          >
            Current
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${eventType === "over" ? "bg-red-500" : "bg-[#444444]"}`}
            onClick={() => handleEventTypeChange("over")}
          >
            Over
          </button>
        </div>

        {/* Event Cards */}
        <div className="space-y-6">
          {events[eventType].map((event) => (
            <div key={event.id} className="bg-[#333333] p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{event.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{event.title}</h2>
                  <p className="text-[#dcdcdc]">{event.description}</p>
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

export default EventDashboard;
