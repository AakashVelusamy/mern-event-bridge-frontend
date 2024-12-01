import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EventEdit = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Initialize mock events or fetch events from an API
  const events = [
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
      additionalConsiderations: [
        "Free Snacks",
        "Free Wi-Fi",
      ],
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
      additionalConsiderations: [],
      seatsAvailable: 20,
    },
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
      additionalConsiderations: [
        "Snacks Available",
        "Free Parking",
      ],
      seatsAvailable: 50,
    },
  ];

  const [updatedEvent, setUpdatedEvent] = useState(null);

  // Fetch the event data based on eventId
  useEffect(() => {
    const eventToEdit = events.find((event) => event.id === parseInt(eventId));
    if (eventToEdit) {
      setUpdatedEvent(eventToEdit);
    }
  }, [eventId]);

  // Handle input changes
  const handleSlotChange = (index, newSlot) => {
    const newSlots = [...updatedEvent.slots];
    newSlots[index] = newSlot;
    setUpdatedEvent({ ...updatedEvent, slots: newSlots });
  };

  const handleAddSlot = () => {
    setUpdatedEvent({
      ...updatedEvent,
      slots: [...updatedEvent.slots, { time: "", availableSpots: 0 }],
    });
  };

  const handleRemoveSlot = (index) => {
    const newSlots = updatedEvent.slots.filter((_, i) => i !== index);
    setUpdatedEvent({ ...updatedEvent, slots: newSlots });
  };

  const handleAddConsideration = () => {
    setUpdatedEvent({
      ...updatedEvent,
      additionalConsiderations: [...updatedEvent.additionalConsiderations, ""],
    });
  };

  const handleRemoveConsideration = (index) => {
    const newConsiderations = updatedEvent.additionalConsiderations.filter((_, i) => i !== index);
    setUpdatedEvent({ ...updatedEvent, additionalConsiderations: newConsiderations });
  };

  const handleConsiderationChange = (index, value) => {
    const newConsiderations = [...updatedEvent.additionalConsiderations];
    newConsiderations[index] = value;
    setUpdatedEvent({ ...updatedEvent, additionalConsiderations: newConsiderations });
  };

  const handleSaveEvent = () => {
    // Save the event (e.g., send the updated data to an API)
    alert("Event details updated successfully!");
    navigate("/host-home");
  };

  if (!updatedEvent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-[#2c2c2c] p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Edit Event</h1>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="text-white block mb-2" htmlFor="event-name">
              Event Name
            </label>
            <input
              type="text"
              id="event-name"
              value={updatedEvent.name}
              onChange={(e) => setUpdatedEvent({ ...updatedEvent, name: e.target.value })}
              className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="text-white block mb-2" htmlFor="event-description">
              Description
            </label>
            <textarea
              id="event-description"
              value={updatedEvent.description}
              onChange={(e) => setUpdatedEvent({ ...updatedEvent, description: e.target.value })}
              className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded"
            />
          </div>

          <div className="mb-4">
            <label className="text-white block mb-2" htmlFor="event-date">
              Date
            </label>
            <input
              type="date"
              id="event-date"
              value={updatedEvent.date}
              onChange={(e) => setUpdatedEvent({ ...updatedEvent, date: e.target.value })}
              className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="text-white block mb-2">Time Slots</label>
            {updatedEvent.slots.map((slot, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={slot.time}
                  onChange={(e) => handleSlotChange(index, { ...slot, time: e.target.value })}
                  className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded"
                  placeholder="Slot Time"
                />
                <input
                  type="number"
                  value={slot.availableSpots}
                  onChange={(e) => handleSlotChange(index, { ...slot, availableSpots: e.target.value })}
                  className="w-full p-2 bg-[#333333] text-white border border-[#444444] rounded mt-2"
                  placeholder="Available Spots"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveSlot(index)}
                  className="bg-red-500 text-white py-2 px-4 rounded mt-2"
                >
                  Remove Slot
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddSlot}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add Slot
            </button>
          </div>

          <div className="mb-4">
            <label className="text-white block mb-2">Additional Considerations</label>
            {updatedEvent.additionalConsiderations.map((consideration, index) => (
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

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={handleSaveEvent}
              className="bg-green-500 text-white py-2 px-6 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventEdit;
