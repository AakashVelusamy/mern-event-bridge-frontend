import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import VolunteerHome from "./components/VolunteerHome";
import SignUpPage from "./components/SignUpPage"; // Assuming you have this component
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import AdminDashboard from "./components/EventDashboard";
import ProfilePage from "./components/ProfilePage"; // Import ProfilePage for volunteer
import EditProfilePage from "./components/EditProfilePage"; // Import EditProfilePage for volunteer
import HostHome from "./components/HostHome"; // Import HostHome page for host
import EventEdit from "./components/EventEdit"; // Import EventEdit page for event editing

const App = () => {
  const [events, setEvents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  useEffect(() => {
    const fetchEvents = async () => {
      const collegeEvents = [
        {
          id: 1,
          name: "MERN Workshop",
          date: "25-11-2024",
          location: "UG Lab - M Block",
          icon: "🌍", // Debate Icon
          description: "Learn to build dynamic web applications using MongoDB, Express, React, and Node.js in this hands-on workshop.",
        },
        {
          id: 2,
          name: "Compiler Workshop",
          date: "05-12-2024",
          location: "CSL 2 - M Block",
          icon: "🗂️", // Freshers' Party Icon
          description: "Dive deep into compiler construction and learn about parsing, lexing, and code generation in this practical workshop.",
        },
        {
          id: 3,
          name: "Introduction to the Sport of Competitive Programming",
          date: "21-12-2024",
          location: "UG Lab - M Block",
          icon: "🏅", // Hackathon Icon
          description: "Understand the basics of competitive programming, including algorithms, problem-solving strategies, and preparation tips for coding contests.",
        },        
        
      ];
      setEvents(collegeEvents);
    };
    

    fetchEvents();
  }, []);

  const handleRegister = (eventId) => {
    console.log(`Registered for event with ID: ${eventId}`);
    alert("You have successfully registered for the event!");
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true); // Set authentication to true after sign up or login
  };

  return (
    <BrowserRouter>
      {/* Only render Navbar after authentication */}
      {isAuthenticated && <Navbar />}
      <Routes>
        {/* Conditional route rendering: SignUpPage only if not authenticated */}
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <SignUpPage onAuthSuccess={handleAuthSuccess} />
            ) : (
              <Navigate to="/host-home" />
            )
          }
        />
        {/* Protected routes after authentication */}
        {isAuthenticated && (
          <>
            {/* Host Routes */}
            <Route path="/host-home" element={<HostHome events={events} />} />
            <Route path="/event-edit/:eventId" element={<EventEdit />} />
            {/* Volunteer Routes */}
            <Route path="/volunteer" element={<VolunteerHome events={events} onRegister={handleRegister} />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Additional Pages */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
