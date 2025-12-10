import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

async function getCampaigns() {
  const res = await fetch("http://localhost:3000/api/getcampaign", {
    cache: "no-store", // ensures fresh data every time (SSR)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch campaigns");
  }

  return res.json();
}

export default async function Dashboard() {
    const { data: campaigns } = await getCampaigns();
   
  return (
    <div className="flex bg-[#eef5ff] position-relative">
      <Sidebar />
      <MainContent campaigns={campaigns} />
    </div>
  );
}
