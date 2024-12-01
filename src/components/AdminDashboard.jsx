import React, { useState } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("current");

// Current events
const currentEvents = [
  {
    id: 1,
    name: "MERN Workshop",
    description: "Learn to build dynamic web applications using MongoDB, Express, React, and Node.js in this hands-on workshop.",
    date: "25-11-2024",
    location: "UG Lab - M Block",
    slots: [
      { time: "10:00 AM - 12:00 PM", availableSpots: 20 },
      { time: "1:00 PM - 3:00 PM", availableSpots: 15 },
    ],
    additionalConsiderations: {
      food: true,
      accommodation: false,
    },
    seatsAvailable: 35,
  },
  {
    id: 2,
    name: "Compiler Workshop",
    description: "Dive deep into compiler construction and learn about parsing, lexing, and code generation in this practical workshop.",
    date: "05-12-2024",
    location: "CSL 2 - M Block",
    slots: [
      { time: "9:00 AM - 11:00 AM", availableSpots: 10 },
      { time: "11:30 AM - 1:30 PM", availableSpots: 8 },
    ],
    additionalConsiderations: {
      food: false,
      accommodation: false,
    },
    seatsAvailable: 20,
  },
];

// Upcoming events
const upcomingEvents = [
  {
    id: 3,
    name: "Introduction to the Sport of Competitive Programming",
    description: "Understand the basics of competitive programming, including algorithms, problem-solving strategies, and preparation tips for coding contests.",
    date: "21-12-2024",
    location: "UG Lab - M Block",
    slots: [
      { time: "9:00 AM - 12:00 PM", availableSpots: 30 },
      { time: "1:00 PM - 4:00 PM", availableSpots: 25 },
    ],
    additionalConsiderations: {
      food: true,
      accommodation: false,
    },
    seatsAvailable: 50,
  },
  {
    id: 4,
    name: "Data Structures and Algorithms Bootcamp",
    description: "An intensive bootcamp on the most essential data structures and algorithms every programmer must know.",
    date: "15-01-2025",
    location: "UG Lab - M Block",
    slots: [
      { time: "9:00 AM - 12:00 PM", availableSpots: 40 },
      { time: "1:00 PM - 3:00 PM", availableSpots: 35 },
    ],
    additionalConsiderations: {
      food: true,
      accommodation: false,
    },
    seatsAvailable: 75,
  },
  {
    id: 5,
    name: "Blockchain Basics Workshop",
    description: "Get hands-on experience in blockchain technology, covering concepts like decentralized applications, smart contracts, and blockchain security.",
    date: "10-02-2025",
    location: "CSL 3 - M Block",
    slots: [
      { time: "10:00 AM - 1:00 PM", availableSpots: 25 },
      { time: "2:00 PM - 5:00 PM", availableSpots: 20 },
    ],
    additionalConsiderations: {
      food: true,
      accommodation: false,
    },
    seatsAvailable: 45,
  },
];

// Past events
const pastEvents = [
  {
    id: 6,
    name: "AI and Machine Learning Symposium",
    description: "A discussion on the latest advancements in AI and machine learning, with industry leaders presenting cutting-edge technologies and use cases.",
    date: "15-10-2024",
    location: "Main Auditorium - M Block",
    slots: [],
    additionalConsiderations: {
      food: true,
      accommodation: true,
    },
    seatsAvailable: 0,
  },
  {
    id: 7,
    name: "Cybersecurity Awareness Seminar",
    description: "Understand the fundamentals of cybersecurity, with practical tips on securing your digital life and avoiding common threats.",
    date: "30-09-2024",
    location: "Conference Room 1 - M Block",
    slots: [],
    additionalConsiderations: {
      food: false,
      accommodation: false,
    },
    seatsAvailable: 0,
  },
];



  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto bg-slate-800 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="flex space-x-4 justify-center mb-6">
          <button
            onClick={() => handleTabChange("current")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "current"
                ? "bg-white text-slate-900"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            }`}
          >
            Current Events
          </button>
          <button
            onClick={() => handleTabChange("upcoming")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "upcoming"
                ? "bg-white text-slate-900"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => handleTabChange("past")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "past"
                ? "bg-white text-slate-900"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Event List */}
        <div className="space-y-4">
          {activeTab === "current" &&
            currentEvents.map((event) => (
              <div
                key={event.id}
                className="flex justify-between items-center bg-slate-700 border border-slate-600 rounded-lg p-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{event.name}</h3>
                  <p className="text-sm text-slate-300">Date: {event.date}</p>
                  <p className="text-sm text-slate-300">Location: {event.location}</p>
                </div>
                <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-slate-200">
                  Manage
                </button>
              </div>
            ))}
          {activeTab === "upcoming" &&
            upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex justify-between items-center bg-slate-700 border border-slate-600 rounded-lg p-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{event.name}</h3>
                  <p className="text-sm text-slate-300">Date: {event.date}</p>
                  <p className="text-sm text-slate-300">Location: {event.location}</p>
                </div>
                <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-slate-200">
                  Manage
                </button>
              </div>
            ))}
          {activeTab === "past" &&
            pastEvents.map((event) => (
              <div
                key={event.id}
                className="flex justify-between items-center bg-slate-700 border border-slate-600 rounded-lg p-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{event.name}</h3>
                  <p className="text-sm text-slate-300">Date: {event.date}</p>
                  <p className="text-sm text-slate-300">Location: {event.location}</p>
                </div>
                <button className="bg-slate-500 text-white px-4 py-2 rounded-lg font-medium cursor-not-allowed opacity-50">
                  No Action
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
