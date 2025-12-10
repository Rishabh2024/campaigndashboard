"use client";

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";

const data = [
  { name: "Mon", sent: 400, meet: 20, reply: 10 },
  { name: "Tue", sent: 380, meet: 25, reply: 12 },
  { name: "Wed", sent: 450, meet: 22, reply: 11 },
  { name: "Thu", sent: 500, meet: 30, reply: 15 },
  { name: "Fri", sent: 520, meet: 28, reply: 16 },
  { name: "Sat", sent: 480, meet: 18, reply: 9 },
  { name: "Sun", sent: 150, meet: 10, reply: 4 },
];

export default function EngagementChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow w-full">
      <h2 className="font-semibold mb-4">Engagement Over Time</h2>

      <LineChart width={500} height={300} data={data}>
        <CartesianGrid stroke="#eee" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sent" stroke="#007bff" strokeWidth={2} />
        <Line type="monotone" dataKey="meet" stroke="#00c49f" strokeWidth={2} />
        <Line type="monotone" dataKey="reply" stroke="#ff7300" strokeWidth={2} />
      </LineChart>
    </div>
  );
}
