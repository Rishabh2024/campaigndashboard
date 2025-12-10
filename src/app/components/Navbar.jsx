"use client";
export default function Navbar({ setCampaignModalOpen }) {
    const handleModal = () => {
      setCampaignModalOpen(true);
    };
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-semibold">Good morning, Admin 👋</h1>
        <p className="text-gray-500">Here's how your AI SDR performed in the last 7 days.</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-gray-200 rounded-lg">Upload Leads</button>
        <button onClick={handleModal} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          + New Campaign
        </button>
      </div>
    </div>
  );
}
