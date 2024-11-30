import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./components/SignUpPage"; // Assuming this is your SignUpPage component
import AdminHome from "./components/AdminHome"; // Assuming AdminHome is your admin dashboard page
import MessagesPage from "./components/MessagesPage"; // Messages page component
import EventCreate from "./components/EventCreate"; // Event create page component
import EventDashboard from "./components/EventDashboard"; // Event dashboard page component
import ManageEvents from "./components/ManageEvents"; // Manage events page component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  const handleSignUpSuccess = () => {
    setIsAuthenticated(true); // After successful signup, set authenticated to true
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* SignUpPage Route */}
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <SignUpPage onSignUpSuccess={handleSignUpSuccess} />
            ) : (
              <Navigate to="/admin-home" />
            )
          }
        />

        {/* AdminHome Route after successful signup */}
        {isAuthenticated && (
          <Route
            path="/admin-home"
            element={
              <div className="min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-center text-white">
                {/* Website Name with Icon */}
                <div className="bg-[#1e1e1e] p-4 text-white border-b border-[#333333] w-full">
                  <div className="container mx-auto flex items-center space-x-2"> {/* Flex layout for left-alignment */}
                    {/* Logo Image */}
                    <img src="/icon.png" alt="Website Icon" className="h-8 w-8" />
                    {/* Website Name */}
                    <h1 className="text-4xl font-bold">PSG Event Bridge</h1>
                  </div>
                </div>

                {/* Admin Home content */}
                <AdminHome />
              </div>
            }
          />
        )}

        {/* MessagesPage Route */}
        {isAuthenticated && (
          <Route
            path="/messages"
            element={
              <div className="min-h-screen bg-[#1e1e1e] text-white">
                <MessagesPage />
              </div>
            }
          />
        )}

        {/* EventCreate Route */}
        {isAuthenticated && (
          <Route
            path="/create-event"
            element={
              <div className="min-h-screen bg-[#1e1e1e] text-white">
                <EventCreate />
              </div>
            }
          />
        )}

        {/* EventDashboard Route */}
        {isAuthenticated && (
          <Route
            path="/event-dashboard"
            element={
              <div className="min-h-screen bg-[#1e1e1e] text-white">
                <EventDashboard />
              </div>
            }
          />
        )}

        {/* ManageEvents Route */}
        {isAuthenticated && (
          <Route
            path="/manage-events"
            element={
              <div className="min-h-screen bg-[#1e1e1e] text-white">
                <ManageEvents />
              </div>
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
