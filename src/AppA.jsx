import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import AdminHome from "./components/AdminHome";
import MessagesPage from "./components/MessagesPage";
import EventCreate from "./components/EventCreate";
import EventDashboard from "./components/EventDashboard";
import ManageEvents from "./components/ManageEvents";
import AdminEventDetails from "./components/AdminEventDetails";
import EventEdit from "./components/EventEdit";

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
              <SignUpPage onAuthSuccess={handleSignUpSuccess} />
            ) : (
              <Navigate to="/admin-home" />
            )
          }
        />

        {/* AdminHome Route after successful signup */}
        <Route
          path="/admin-home"
          element={
            isAuthenticated ? (
              <div className="min-h-screen bg-[#1e1e1e] flex flex-col items-center justify-center text-white">
                <div className="bg-[#1e1e1e] p-4 text-white border-b border-[#333333] w-full">
                  <div className="container mx-auto flex items-center space-x-2">
                    <img src="/icon.png" alt="Website Icon" className="h-8 w-8" />
                    <h1 className="text-2xl font-bold hover:text-[#a8a8a8]">PSG Event Bridge</h1>
                  </div>
                </div>
                <AdminHome />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Other routes */}
        <Route
          path="/messages"
          element={isAuthenticated ? <MessagesPage /> : <Navigate to="/" />}
        />
        <Route
          path="/create-event"
          element={isAuthenticated ? <EventCreate /> : <Navigate to="/" />}
        />
        <Route
          path="/event-dashboard"
          element={isAuthenticated ? <EventDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/admin-event-details/:eventId"
          element={isAuthenticated ? <AdminEventDetails /> : <Navigate to="/" />}
        />
        <Route
          path="/event-edit/:eventId"
          element={isAuthenticated ? <EventEdit /> : <Navigate to="/" />}
        />
        <Route
          path="/manage-events"
          element={isAuthenticated ? <ManageEvents /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
