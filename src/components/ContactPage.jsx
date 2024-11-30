import React, { useState } from "react";

const ContactPage = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    // You can replace the alert with logic to send feedback to an API or email service
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1e1e]">
      <div className="max-w-4xl w-full bg-[#2c2c2c] p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h1>
        <p className="text-lg text-[#dcdcdc] mb-4">
          If you have any questions, need support, or would like to provide feedback, feel free to leave a message below.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-[#dcdcdc]">Your Feedback</h3>
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                rows="6"
                placeholder="Type your feedback here..."
                className="w-full border border-[#333333] rounded-lg p-4 text-lg text-[#dcdcdc] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-[#4e4e4e] text-white py-2 px-6 rounded-lg font-medium hover:bg-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </form>

        <p className="text-lg text-[#dcdcdc] mt-4">
          We look forward to hearing from you and assisting you with anything you need!
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
