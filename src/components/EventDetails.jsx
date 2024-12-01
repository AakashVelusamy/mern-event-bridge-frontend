import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Simulating fetching the event data based on eventId
    const fetchedEvents = [
      {
        id: 1,
        name: "MERN Workshop",
        date: "25-11-2024",
        location: "UG Lab - M Block",
        icon: "🌍",
        description:
          "Learn to build dynamic web applications using MongoDB, Express, React, and Node.js in this hands-on workshop.",
        slots: [
          { time: "9:00 AM - 11:00 AM", availableSpots: 10 },
          { time: "11:00 AM - 1:00 PM", availableSpots: 8 },
          { time: "1:00 PM - 3:00 PM", availableSpots: 5 },
        ],
      },
      {
        id: 2,
        name: "Compiler Workshop",
        date: "05-12-2024",
        location: "CSL 2 - M Block",
        icon: "🗂️",
        description:
          "Dive deep into compiler construction and learn about parsing, lexing, and code generation in this practical workshop.",
        slots: [
          { time: "9:00 AM - 11:00 AM", availableSpots: 10 },
          { time: "11:00 AM - 1:00 PM", availableSpots: 7 },
          { time: "1:00 PM - 3:00 PM", availableSpots: 3 },
        ],
      },
      {
        id: 3,
        name: "Introduction to the Sport of Competitive Programming",
        date: "21-12-2024",
        location: "UG Lab - M Block",
        icon: "🏅",
        description:
          "Understand the basics of competitive programming and learn strategies for coding contests.",
        slots: [
          { time: "9:00 AM - 11:00 AM", availableSpots: 12 },
          { time: "11:00 AM - 1:00 PM", availableSpots: 5 },
          { time: "1:00 PM - 3:00 PM", availableSpots: 2 },
        ],
      },
      {
        id: 4,
        name: "Data Structures and Algorithms Bootcamp",
        date: "15-01-2025",
        location: "UG Lab - M Block",
        icon: "📚",
        description:
          "An intensive bootcamp on the most essential data structures and algorithms every programmer must know.",
        slots: [
          { time: "9:00 AM - 12:00 PM", availableSpots: 40 },
          { time: "1:00 PM - 3:00 PM", availableSpots: 35 },
        ],
      },
      {
        id: 5,
        name: "Blockchain Basics Workshop",
        date: "10-02-2025",
        location: "CSL 3 - M Block",
        icon: "🔗",
        description:
          "Get hands-on experience in blockchain technology, covering concepts like decentralized applications, smart contracts, and blockchain security.",
        slots: [
          { time: "10:00 AM - 1:00 PM", availableSpots: 25 },
          { time: "2:00 PM - 5:00 PM", availableSpots: 20 },
        ],
      },
      {
        id: 6,
        name: "AI and Machine Learning Symposium",
        date: "15-10-2024",
        location: "Main Auditorium - M Block",
        icon: "🤖",
        description:
          "A discussion on the latest advancements in AI and machine learning, with industry leaders presenting cutting-edge technologies and use cases.",
        slots: [],
      },
      {
        id: 7,
        name: "Cybersecurity Awareness Seminar",
        date: "30-09-2024",
        location: "Conference Room 1 - M Block",
        icon: "🔒",
        description:
          "Understand the fundamentals of cybersecurity, with practical tips on securing your digital life and avoiding common threats.",
        slots: [],
      },
    ];
    

    const selectedEvent = fetchedEvents.find((event) => event.id === parseInt(eventId));

    if (selectedEvent) {
      setEvent(selectedEvent);
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
