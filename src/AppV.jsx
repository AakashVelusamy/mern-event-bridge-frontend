import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import VolunteerHome from "./components/VolunteerHome";
import SignUpPage from "./components/SignUpPage"; // Assuming you have this component
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import ProfilePage from "./components/ProfilePage";
import EditProfilePage from "./components/EditProfilePage";
import HostHome from "./components/HostHome"; // Import HostHome page for host
import EventEdit from "./components/EventEdit"; // Import EventEdit page for event editing
import EventDetails from "./components/EventDetails"; // Import EventDetails page

const App = () => {
  const [events, setEvents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authenticated state to check if user is logged in

  useEffect(() => {
    const fetchEvents = async () => {
      const collegeEvents = [
        {
          id: 1,
          name: "MERN Workshop",
          date: "25-11-2024",
          location: "UG Lab - M Block",
          icon: "🌍", // Event Icon
          description: "Learn to build dynamic web applications using MongoDB, Express, React, and Node.js in this hands-on workshop.",
        },
        {
          id: 2,
          name: "Compiler Workshop",
          date: "05-12-2024",
          location: "CSL 2 - M Block",
          icon: "🗂️", // Event Icon
          description: "Dive deep into compiler construction and learn about parsing, lexing, and code generation in this practical workshop.",
        },
        {
          id: 3,
          name: "Competitive Programming Workshop",
          date: "21-12-2024",
          location: "UG Lab - M Block",
          icon: "🏅", // Event Icon
          description: "Understand the basics of competitive programming and learn strategies for coding contests.",
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
    setIsAuthenticated(true); // Set authentication state to true
  };

  return (
    <BrowserRouter>
      {/* Render Navbar only after authentication */}
      {isAuthenticated && <Navbar />}
      
      <Routes>
        {/* Redirect to SignUpPage if not authenticated */}
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <SignUpPage onAuthSuccess={handleAuthSuccess} />
            ) : (
              // Redirect to /volunteer-home if already authenticated
              <Navigate to="/volunteer-home" />
            )
          }
        />
        
        {/* Protected routes after successful authentication */}
        {isAuthenticated && (
          <>
            <Route
              path="/volunteer-home"
              element={<VolunteerHome events={events} onRegister={handleRegister} />}
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </>
        )}

        {/* Host-related routes */}
        {isAuthenticated && (
          <>
            <Route path="/host-home" element={<HostHome />} />
            <Route path="/event-edit" element={<EventEdit />} />
          </>
        )}

        {/* Route for event details */}
        <Route path="/event-details/:eventId" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
