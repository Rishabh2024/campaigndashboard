"use client";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const playbookData = [
  { name: "SaaS Demo v2", value: 14 },
  { name: "Demo v1", value: 8 },
  { name: "Healthcare Connect", value: 10 },
];

export default function PlaybookChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow w-full">
      <h2 className="font-semibold mb-4">Top Performing Playbooks</h2>

      <BarChart width={500} height={300} data={playbookData}>
        <CartesianGrid stroke="#eee" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#4a90e2" />
      </BarChart>
    </div>
  );
}
