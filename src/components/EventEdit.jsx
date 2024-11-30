import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EventEdit = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Dummy event data for editing
  const [event, setEvent] = useState({
    id: 1,
    name: "Tree Plantation Drive",
    description: "Join us for a fun-filled day planting trees in Central Park!",
    date: "2024-12-05",
    location: "Central Park",
    slots: [
      { time: "9:00 AM - 11:00 AM", availableSpots: 10 },
      { time: "11:00 AM - 1:00 PM", availableSpots: 8 },
    ],
    additionalConsiderations: {
      food: false,
      accommodation: false,
    },
    seatsAvailable: 50,
  });

  const [updatedEvent, setUpdatedEvent] = useState(event);

  useEffect(() => {
    // You can fetch the event details from an API if needed
    setUpdatedEvent(event); 
  }, [event]);

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

  const handleAdditionalConsiderationChange = (event) => {
    const { name, checked } = event.target;
    setUpdatedEvent({
      ...updatedEvent,
      additionalConsiderations: {
        ...updatedEvent.additionalConsiderations,
        [name]: checked,
      },
    });
  };

  const handleSaveEvent = () => {
    // Save the event (e.g., send the updated data to an API)
    alert("Event details updated successfully!");
    navigate("/host-home");
  };

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
            <div>
              <label className="text-white mr-4">
                <input
                  type="checkbox"
                  name="food"
                  checked={updatedEvent.additionalConsiderations.food}
                  onChange={handleAdditionalConsiderationChange}
                />
                Provide Food
              </label>
              <label className="text-white">
                <input
                  type="checkbox"
                  name="accommodation"
                  checked={updatedEvent.additionalConsiderations.accommodation}
                  onChange={handleAdditionalConsiderationChange}
                />
                Provide Accommodation
              </label>
            </div>
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
