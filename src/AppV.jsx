import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import VolunteerHome from "./components/VolunteerHome";
import SignUpPage from "./components/SignUpPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import AdminDashboard from "./components/EventDashboard";
import ProfilePage from "./components/ProfilePage"; // Import ProfilePage
import EditProfilePage from "./components/EditProfilePage"; // Import EditProfilePage
import EventDetails from "./components/EventDetails"; // Import EventDetails

const App = () => {
  const [events, setEvents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  useEffect(() => {
    const fetchEvents = async () => {
      const mockEvents = [
        {
          id: 1,
          icon: "🌳", // Tree Plantation Icon
          title: "Tree Plantation Drive",
          description: "Join us in planting trees in the central park to contribute to a greener future.",
        },
        {
          id: 2,
          icon: "🏖️", // Beach Cleanup Icon
          title: "Beach Cleanup",
          description: "Help clean up the beaches for a cleaner, healthier environment.",
        },
        {
          id: 3,
          icon: "🎉", // DJ Night Icon
          title: "DJ Night",
          description: "Organize a fun DJ night for the community to enjoy music and dancing.",
        },
      ];
      setEvents(mockEvents);
    };

    fetchEvents();
  }, []);

  const handleSignUpSuccess = () => {
    setIsAuthenticated(true); // Set authentication to true after signup
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
              <SignUpPage onSignUpSuccess={handleSignUpSuccess} />
            ) : (
              <Navigate to="/volunteer" />
            )
          }
        />
        {/* Protected routes after authentication */}
        {isAuthenticated && (
          <>
            <Route
              path="/volunteer"
              element={<VolunteerHome events={events} />}
            />
            <Route path="/event-details/:eventId" element={<EventDetails />} />
            <Route
              path="/profile"
              element={<ProfilePage />} // New route for ProfilePage
            />
            <Route
              path="/edit-profile"
              element={<EditProfilePage />} // New route for EditProfilePage
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
