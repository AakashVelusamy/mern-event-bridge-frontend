import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1e1e]">
      <div className="max-w-4xl w-full bg-[#2c2c2c] p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">About Our Platform</h1>
        <p className="text-lg text-[#dcdcdc] mb-4">
          Welcome to our platform, where we connect volunteers with events that aim to make a positive impact in communities. Our platform provides easy access to a variety of volunteer opportunities, from tree plantation drives to beach cleanups and food distribution events.
        </p>
        <p className="text-lg text-[#dcdcdc] mb-4">
          We believe in the power of collective action, and by volunteering through our platform, you can contribute to making the world a better place, one event at a time. Whether you're an individual looking to volunteer or an organization needing volunteers for an event, we've got you covered.
        </p>
        <p className="text-lg text-[#dcdcdc]">
          Join us in creating a community of passionate individuals who are dedicated to making a difference. Together, we can achieve great things!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
