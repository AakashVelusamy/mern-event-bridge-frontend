import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventDashboard = () => {
  const [eventType, setEventType] = useState("upcoming");

  const events = {
    upcoming: [
      {
        id: 3,
        title: "Introduction to the Sport of Competitive Programming",
        description: "Understand the basics of competitive programming, including algorithms, problem-solving strategies, and preparation tips for coding contests.",
        icon: "💻",
      },
      {
        id: 4,
        title: "Data Structures and Algorithms Bootcamp",
        description: "An intensive bootcamp on the most essential data structures and algorithms every programmer must know.",
        icon: "📚",
      },
      {
        id: 5,
        title: "Blockchain Basics Workshop",
        description: "Get hands-on experience in blockchain technology, covering concepts like decentralized applications, smart contracts, and blockchain security.",
        icon: "🔗",
      },
    ],
    current: [
      {
        id: 1,
        title: "MERN Workshop",
        description: "Learn to build dynamic web applications using MongoDB, Express, React, and Node.js in this hands-on workshop.",
        icon: "🌐",
      },
      {
        id: 2,
        title: "Compiler Workshop",
        description: "Dive deep into compiler construction and learn about parsing, lexing, and code generation in this practical workshop.",
        icon: "🖥️",
      },
    ],
    over: [
      {
        id: 6,
        title: "AI and Machine Learning Symposium",
        description: "A discussion on the latest advancements in AI and machine learning, with industry leaders presenting cutting-edge technologies and use cases.",
        icon: "🤖",
      },
      {
        id: 7,
        title: "Cybersecurity Awareness Seminar",
        description: "Understand the fundamentals of cybersecurity, with practical tips on securing your digital life and avoiding common threats.",
        icon: "🔒",
      },
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
                  to={`/admin-event-details/${event.id}`}
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
