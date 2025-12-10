export default function ActivityStream() {
  const activities = [
    {
      title: "Generated 42 drafts using Playbook v1.0",
      time: "2 min ago",
      badge: "In Progress",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Identified 6 positive replies from recent campaigns",
      time: "8 min ago",
      badge: "Success",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Recommends adjusting Follow-up #2 timing",
      time: "15 min ago",
      badge: "Needs Review",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Flagged 12 low-quality emails for your review",
      time: "22 min ago",
      badge: "Action Required",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Paused sending due to inbox warming schedule",
      time: "1 hour ago",
      badge: "Warning",
      color: "bg-red-100 text-red-700",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">AI Activity Stream</h2>

      {activities.map((item, i) => (
        <div
          key={i}
          className="p-4 rounded-lg mb-3 border bg-gray-50 flex justify-between"
        >
          <div>
            <p>{item.title}</p>
            <p className="text-xs text-gray-500">{item.time}</p>
          </div>
          <span className={`px-3 py-1 text-xs rounded-lg ${item.color}`}>
            {item.badge}
          </span>
        </div>
      ))}
    </div>
  );
}
