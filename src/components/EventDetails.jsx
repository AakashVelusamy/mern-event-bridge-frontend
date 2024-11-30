import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Simulating fetching the event data
    const fetchedEvent = {
      id: 1,
      name: "Tree Plantation Drive",
      description: "Join us for a fun-filled day planting trees in Central Park!",
      date: "2024-12-05",
      location: "Central Park",
      slots: [
        { time: "9:00 AM - 11:00 AM", availableSpots: 10 },
        { time: "11:00 AM - 1:00 PM", availableSpots: 8 },
        { time: "1:00 PM - 3:00 PM", availableSpots: 5 },
      ],
    };

    if (eventId == fetchedEvent.id) {
      setEvent(fetchedEvent);
    }
  }, [eventId]);

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [additionalConsiderations, setAdditionalConsiderations] = useState({
    food: false,
    accommodation: false,
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSlotChange = (slot) => {
    setSelectedSlot(slot);
  };

  const handleConsiderationChange = (event) => {
    const { name, checked } = event.target;
    setAdditionalConsiderations((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleRegister = () => {
    if (selectedSlot) {
      setIsRegistered(true);
      alert(`You have successfully registered for the event on ${selectedSlot.time}!`);
    } else {
      alert("Please select a time slot.");
    }
  };

  if (!event) {
    return <p>Loading event details...</p>;
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] p-6">
      <div className="max-w-4xl mx-auto bg-[#2c2c2c] shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-white text-center mb-6">{event.name}</h1>
        <p className="text-lg text-[#dcdcdc] mb-4">{event.description}</p>
        <p className="text-md text-[#b0b0b0]">Date: {event.date}</p>
        <p className="text-md text-[#b0b0b0]">Location: {event.location}</p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white mb-4">Choose a Time Slot</h3>
          <div className="space-y-4">
            {event.slots.map((slot, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`slot-${index}`}
                  name="timeSlot"
                  value={slot.time}
                  onChange={() => handleSlotChange(slot)}
                  className="mr-2"
                />
                <label htmlFor={`slot-${index}`} className="text-lg text-[#dcdcdc]">
                  {slot.time} - {slot.availableSpots} spots available
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white mb-4">Additional Considerations</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="food"
                name="food"
                checked={additionalConsiderations.food}
                onChange={handleConsiderationChange}
                className="mr-2"
              />
              <label htmlFor="food" className="text-lg text-[#dcdcdc]">
                Food
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="accommodation"
                name="accommodation"
                checked={additionalConsiderations.accommodation}
                onChange={handleConsiderationChange}
                className="mr-2"
              />
              <label htmlFor="accommodation" className="text-lg text-[#dcdcdc]">
                Accommodation
              </label>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleRegister}
            className="bg-[#4e4e4e] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
          >
            Register
          </button>
        </div>

        {isRegistered && (
          <div className="mt-6 text-center text-lg text-green-500">You are successfully registered!</div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
