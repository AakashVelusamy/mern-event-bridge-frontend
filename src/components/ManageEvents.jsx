import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManageEvents = () => {
  const [eventType, setEventType] = useState("upcoming");

  // Placeholder events for current and upcoming events
  const events = {
    upcoming: [
      { id: 1, title: "Tree Plantation Drive", description: "Join us for a fun-filled day planting trees in Central Park!", icon: "🌳" },
      { id: 2, title: "Beach Cleanup", description: "Help us clean the beach and make a positive impact!", icon: "🏖️" },
    ],
    current: [
      { id: 3, title: "Blood Donation Drive", description: "Donate blood and save lives!", icon: "🩸" },
      { id: 4, title: "Cooking for a Cause", description: "Join us to cook meals for the homeless!", icon: "🍳" },
    ],
  };

  const handleEventTypeChange = (type) => {
    setEventType(type);
  };

  const handleDeleteEvent = (id) => {
    // Logic to delete event
    alert(`Event with ID ${id} deleted.`);
  };

  const handleUpdateEvent = (id) => {
    // Logic to navigate to the update page (replace with the actual route)
    alert(`Navigating to update event with ID ${id}.`);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] p-6">
      <div className="max-w-6xl mx-auto bg-[#2c2c2c] shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Manage Events</h1>

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
                {/* View Event Details */}
                <Link
                  to={`/event-details/${event.id}`}
                  className="bg-[#4e4e4e] text-white py-2 px-4 rounded-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
                >
                  View Details
                </Link>
                
                {/* Update Event */}
                <button
                  onClick={() => handleUpdateEvent(event.id)}
                  className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                >
                  Update
                </button>

                {/* Delete Event */}
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;
