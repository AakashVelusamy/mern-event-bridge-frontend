import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventCreate = () => {
  const navigate = useNavigate();

  // Initialize event with default values
  const [event, setEvent] = useState({
    name: "",
    host: "",
    description: "-",
    date: "-",
    location: "-",
    slots: [
      { time: "-", availableSpots: 0 },
      { time: "-", availableSpots: 0 },
    ],
    additionalConsiderations: ["", ""], // initialize with empty strings
    seatsAvailable: 0,
  });

  const handleSaveEvent = () => {
    // Logic to save event (e.g., send the data to the server)
    alert("Event created successfully!");
    navigate("/admin-home"); // Redirect to Admin Home
  };

  const handleAddConsideration = () => {
    setEvent({
      ...event,
      additionalConsiderations: [...event.additionalConsiderations, ""],
    });
  };

  const handleRemoveConsideration = (index) => {
    const newConsiderations = event.additionalConsiderations.filter((_, i) => i !== index);
    setEvent({ ...event, additionalConsiderations: newConsiderations });
  };

  const handleConsiderationChange = (index, value) => {
    const newConsiderations = [...event.additionalConsiderations];
    newConsiderations[index] = value;
    setEvent({ ...event, additionalConsiderations: newConsiderations });
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-[#2c2c2c] p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Create Event</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* Event Name */}
          <div className="mb-4">
            <label className="text-white block mb-2" htmlFor="event-name">
              Event Name
            </label>
            <input
              type="text"
              id="event-name"
              value={event.name}
              onChange={(e) => setEvent({ ...event, name: e.target.value })}
              className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded"
            />
          </div>

          {/* Host Assignment */}
          <div className="mb-4">
            <label className="text-white block mb-2" htmlFor="host">
              Assign Host
            </label>
            <input
              type="text"
              id="host"
              value={event.host}
              onChange={(e) => setEvent({ ...event, host: e.target.value })}
              className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded"
            />
          </div>

          {/* Other Fields with Default Values */}
          <div className="mb-4">
            <label className="text-white block mb-2">Event Description</label>
            <textarea
              value={event.description}
              readOnly
              className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded"
            />
          </div>

          <div className="mb-4">
            <label className="text-white block mb-2">Date</label>
            <input
              type="text"
              value={event.date}
              readOnly
              className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded"
            />
          </div>

          <div className="mb-4">
            <label className="text-white block mb-2">Location</label>
            <input
              type="text"
              value={event.location}
              readOnly
              className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded"
            />
          </div>

          {/* Time Slots */}
          <div className="mb-4">
            <label className="text-white block mb-2">Time Slots</label>
            {event.slots.map((slot, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={slot.time}
                  readOnly
                  className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded"
                  placeholder="Slot Time"
                />
                <input
                  type="number"
                  value={slot.availableSpots}
                  readOnly
                  className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded mt-2"
                  placeholder="Available Spots"
                />
              </div>
            ))}
          </div>

          {/* Additional Considerations */}
          <div className="mb-4">
            <label className="text-white block mb-2">Additional Considerations</label>
            {event.additionalConsiderations.map((consideration, index) => (
              <div key={index} className="mb-4 flex">
                <input
                  type="text"
                  value={consideration}
                  onChange={(e) => handleConsiderationChange(index, e.target.value)}
                  className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded"
                  placeholder="Enter consideration"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveConsideration(index)}
                  className="bg-red-500 text-white py-2 px-4 rounded ml-2"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddConsideration}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add Consideration
            </button>
          </div>

          {/* Save Button */}
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={handleSaveEvent}
              className="bg-green-500 text-white py-2 px-6 rounded"
            >
              Save Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventCreate;
