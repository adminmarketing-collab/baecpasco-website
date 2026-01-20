"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [showServices, setShowServices] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });

  const servicesList = [
    "Audit & Assurance",
    "Accounting & Financial Reporting",
    "Taxation & Compliance",
    "Bookkeeping & Payroll Services",
    "Business & Financial Consultancy",
    "Regulatory Compliance & Corporate Services",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message submitted (demo only)");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 shadow-md rounded-[20px] max-w-lg mx-auto space-y-6"
    >
      {/* Name */}
      <div>
        <label className="block mb-2 font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-medium">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-2 font-medium">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Services Dropdown */}
      <div>
        <button
          type="button"
          onClick={() => setShowServices(!showServices)}
          className="w-full flex justify-between items-center border px-4 py-3 font-medium rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Services Interested In
          <span className={`transition-transform duration-300 ${showServices ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {showServices && (
          <div className="mt-4 border p-4 space-y-3 rounded bg-gray-50">
            {servicesList.map((service, index) => (
              <label key={index} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleCheckboxChange(service)}
                  className="w-5 h-5 border-2 border-gray-400 rounded checked:bg-red-500 checked:border-red-500"
                />
                <span className="text-[16px]">{service}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 font-medium">Message</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-red-500 text-white px-8 py-3 font-semibold uppercase rounded hover:bg-red-600 transition w-full"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
