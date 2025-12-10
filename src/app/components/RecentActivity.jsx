export default function RecentActivity() {
  const items = [
    { text: "Email sent to John @Acme", time: "2h ago", color: "bg-green-500" },
    { text: "Meeting booked with Alice @XYZ Corp", time: "3h ago", color: "bg-green-500" },
    { text: "Reply received from Sarah @TechCo", time: "4h ago", color: "bg-blue-500" },
    { text: "Campaign 'SaaS Outreach' paused", time: "5h ago", color: "bg-orange-500" },
    { text: "Email bounced: invalid@example.com", time: "6h ago", color: "bg-red-500" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="font-semibold text-lg">Recent Activity</h2>

      {items.map((item, i) => (
        <div key={i} className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${item.color}`} />
            <p>{item.text}</p>
          </div>
          <span className="text-xs text-gray-500">{item.time}</span>
        </div>
      ))}
    </div>
  );
}
