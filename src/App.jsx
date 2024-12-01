import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import VolunteerHome from "./components/VolunteerHome";
import SignUpPage from "./components/SignUpPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import ProfilePage from "./components/ProfilePage";
import EditProfilePage from "./components/EditProfilePage";
import HostHome from "./components/HostHome";
import EventEdit from "./components/EventEdit";
import EventDetails from "./components/EventDetails";
import MessagesPage from "./components/MessagesPage";
import EventCreate from "./components/EventCreate";
import EventDashboard from "./components/EventDashboard";
import ManageEvents from "./components/ManageEvents";
import AdminEventDetails from "./components/AdminEventDetails"; // Admin Event Details
import AdminHome from "./components/AdminHome";

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
    setIsAuthenticated(true); // Set authentication state to true after sign up or login
  };

  return (
    <BrowserRouter>
      {/* Only render Navbar after authentication */}
      {isAuthenticated && <Navbar />}
      <Routes>
        {/* SignUpPage Route */}
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <SignUpPage onAuthSuccess={handleAuthSuccess} />
            ) : (
              // Redirect to /host-home if already authenticated
              <Navigate to="/admin-home" />
            //   <Navigate to="/host-home" />
            //   <Navigate to="/volunteer-home" />

            )
          }
        />

        {/* Protected routes after successful authentication */}
        {isAuthenticated && (
          <>
            {/* Host Routes */}
            <Route path="/host-home" element={<HostHome events={events} />} />
            <Route path="/event-edit/:eventId" element={<EventEdit />} />
            <Route path="/event-create" element={<EventCreate />} />

            {/* Volunteer Routes */}
            <Route
              path="/volunteer-home"
              element={<VolunteerHome events={events} onRegister={handleRegister} />}
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            
            {/* Admin Routes */}
            <Route path="/admin-home" element={<AdminHome />} />
            <Route path="/create-event" element={<EventCreate />} />
            <Route path="/admin-event-details/:eventId" element={<AdminEventDetails />} />
            <Route path="/event-dashboard" element={<EventDashboard />} />
            <Route path="/manage-events" element={<ManageEvents />} />
            <Route path="/messages" element={<MessagesPage />} />
            
            {/* Additional Pages */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </>
        )}

        {/* Route for event details */}
        <Route path="/event-details/:eventId" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
