import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1e1e]">
      <div className="max-w-4xl w-full bg-[#2c2c2c] p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">About PSG Event Bridge</h1>
        <p className="text-lg text-[#dcdcdc] mb-4">
          Welcome to <span className="font-semibold text-white">PSG Event Bridge</span>, a platform designed to act as the perfect bridge between those who organize impactful events and the volunteers eager to contribute. Just like a bridge connects two sides, our platform brings together event hosts and volunteers, creating a space where opportunities meet passion.
        </p>
        <p className="text-lg text-[#dcdcdc] mb-4">
          At <span className="font-semibold text-white">PSG Event Bridge</span>, we believe that every event has the potential to create positive change, and every volunteer has the power to make a difference. Whatever be the event you conduct, our platform ensures that the right people find the right causes.
        </p>
        <p className="text-lg text-[#dcdcdc] mb-4">
          Join us on <span className="font-semibold text-white">PSG Event Bridge</span>, where connection leads to action, and together we build a stronger, more compassionate community.
        </p>
        <p className="text-lg text-[#dcdcdc]">
          Be the change - step onto the bridge and make a difference!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
