import React from "react";

async function getCampaigns() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getcampaign`, {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch campaigns");
  }

  return res.json();
}

const Page = async () => {
  const { data: campaigns } = await getCampaigns();

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {campaigns.length === 0 ? (
        <p>No campaigns found</p>
      ) : (
        campaigns.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow bg-white"
          >
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600 mt-1">{item.description}</p>

            <div className="mt-3">
              <p><strong>Budget:</strong> ₹{item.budget}</p>
              <p><strong>Start Date:</strong> {item.startDate}</p>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Created: {new Date(item.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
