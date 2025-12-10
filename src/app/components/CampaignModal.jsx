"use client";
import { useState } from "react";
export default function CampaignModal({ setCampaignModalOpen }) {
  const handleModal = () => {
    setCampaignModalOpen(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    budget: "",
    startDate: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/campaign`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    
    console.log(data);

    if (res.ok) {
      alert("Campaign Created Successfully!");
      handleModal();
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        {/* Modal Box */}
        <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-500"
            onClick={handleModal}
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold mb-4">Create New Campaign</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Campaign Name */}
            <div>
              <label className="font-medium">Campaign Name</label>
              <input
                type="text"
                name="name"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter campaign name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="font-medium">Description</label>
              <textarea
                name="description"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Budget */}
            <div>
              <label className="font-medium">Budget (₹)</label>
              <input
                type="number"
                name="budget"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter budget amount"
                value={formData.budget}
                onChange={handleChange}
                required
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="font-medium">Start Date</label>
              <input
                type="date"
                name="startDate"
                className="w-full mt-1 p-2 border rounded-md"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md"
            >
              Save Campaign
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
