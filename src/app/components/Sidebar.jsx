"use client";

import { Home, Inbox, FileText, Layers, Play, Settings } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#0A2E5C] text-white min-h-screen p-6 rounded-r-2xl shadow-lg">
      <h1 className="text-xl font-bold mb-10 flex items-center gap-2">
        <span className="p-2 bg-white/20 rounded-lg">A</span> TEST
      </h1>

      <nav className="space-y-4">
        <MenuItem icon={<Home size={18} />} label="Dashboard" active />
        <MenuItem icon={<Inbox size={18} />} label="Inbox" />
        <MenuItem icon={<FileText size={18} />} label="Drafts" />
        <Link href="/campaign">

        <MenuItem icon={<Layers size={18} />} label="Campaigns" />
        </Link>
        <MenuItem icon={<Play size={18} />} label="Playbooks" />
        <MenuItem icon={<Settings size={18} />} label="Settings" />
      </nav>

      <div className="mt-20 p-4 bg-white/10 rounded-xl text-sm">
        <p className="opacity-80">AURA</p>
        <p className="text-xs opacity-70">Analyzing your leads...</p>
      </div>
    </div>
  );
}

const MenuItem = ({ icon, label, active }) => {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/10
      ${active ? "bg-white text-[#0A2E5C] font-semibold" : "text-white/80"}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};
