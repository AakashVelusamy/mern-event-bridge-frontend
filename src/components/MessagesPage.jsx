import React, { useState } from "react";

const MessagesPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Harshil Bhavik Momaya",
      email: "23pt11@psgtech.ac.in",
      message: "I love your app! It's so helpful.",
      date: "29-11-2024", // Changed to dd-mm-yyyy format
    },
    {
      id: 2,
      name: "Kabilan S",
      email: "23pt14@psgtech.ac.in",
      message: "Could you add a reminder feature? It would be great!",
      date: "28-11-2024", // Changed to dd-mm-yyyy format
    },
    {
      id: 3,
      name: "Jitesh S",
      email: "23pt12@psgtech.ac.in",
      message: "How can I get involved in your events?",
      date: "27-11-2024", // Changed to dd-mm-yyyy format
    },
    {
      id: 4,
      name: "Prathish S",
      email: "23pt25@psgtech.ac.in",
      message: "I am not able to register for any events.",
      date: "27-11-2024", // Changed to dd-mm-yyyy format
    },
  ]);
  

  return (
    <div className="min-h-screen bg-[#1e1e1e] p-6">
      <div className="max-w-6xl mx-auto bg-[#2c2c2c] p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Messages</h1>
        
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="bg-[#333333] p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="text-xl text-[#dcdcdc] font-semibold">{message.name}</div>
                <div className="text-sm text-[#888888]">{message.email}</div>
              </div>
              <div className="mt-2 text-[#dcdcdc]">{message.message}</div>
              <div className="mt-2 text-xs text-[#888888]">{message.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
