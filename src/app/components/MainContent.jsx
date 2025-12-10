"use client";
import { useState } from "react";

import StatsCard from "./StatsCard";
import EngagementChart from "./LineChart";
import PlaybookChart from "./BarChart";
import ActivityStream from "./ActivityStream";
import Insights from "./Insights";
import RecentActivity from "./RecentActivity";
import Navbar from "./Navbar";
import CampaignModal from "./CampaignModal";

const MainContent = ({campaigns}) => {
  const [isCampaignModalOpen, setCampaignModalOpen] = useState(false);
  return (
    <div className="flex-1 p-6 space-y-6">
      <Navbar setCampaignModalOpen={setCampaignModalOpen} />
      <div>
        {isCampaignModalOpen && (
          <CampaignModal setCampaignModalOpen={setCampaignModalOpen} />
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatsCard title="Total Campaigns" value={campaigns.length} percent="+8%" icon="📨" />
        <StatsCard title="Replies" value="1,240" percent="+12%" icon="💬" />
        <StatsCard
          title="Meetings Booked"
          value="123"
          percent="+15%"
          icon="📅"
        />
        <StatsCard title="Reply Rate" value="10.1%" percent="+2.3%" icon="📈" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-4">
        <EngagementChart />
        <PlaybookChart />
      </div>

      <ActivityStream />
      <Insights />
      <RecentActivity />
    </div>
  );
};

export default MainContent;
