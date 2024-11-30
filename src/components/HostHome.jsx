import React from "react";
import { Link } from "react-router-dom";

const HostHome = ({ events }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1e1e] p-6">
      <div className="w-full max-w-4xl bg-[#2c2c2c] p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Assigned Events</h1>
        
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="bg-[#333333] p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{event.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{event.name}</h2>
                  <p className="text-[#dcdcdc]">{event.description}</p>
                </div>
              </div>
              
              <div className="mt-4 flex space-x-4">
                <Link
                  to={`/event-edit/${event.id}`}
                  className="bg-[#4e4e4e] text-white py-2 px-4 rounded-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
                >
                  Edit Event
                </Link>
                <Link
                  to={`/send-invites/${event.id}`}
                  className="bg-[#4e4e4e] text-white py-2 px-4 rounded-lg hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
                >
                  Send Invitations
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostHome;
