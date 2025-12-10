export default function Insights() {
  const insights = [
    {
      title: "Follow-up #2 at Day 4 performs best",
      desc: "Your Day-4 follow-up got 26% more replies.",
      tag: "High",
    },
    {
      title: "Subject lines under 7 words drive 18% more opens",
      desc: "Short subject lines are performing better across campaigns.",
      tag: "High",
    },
    {
      title: "Tuesday 10 AM sends show highest engagement",
      desc: "Emails on Tuesday mornings have the highest open rate.",
      tag: "Medium",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="font-semibold text-lg">AI Insights & Suggestions</h2>

      {insights.map((item, i) => (
        <div key={i} className="p-4 border rounded-xl bg-gray-50">
          <div className="flex justify-between">
            <h3 className="font-semibold">{item.title}</h3>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
              {item.tag}
            </span>
          </div>
          <p className="text-sm text-gray-500">{item.desc}</p>

          <div className="flex gap-3 mt-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Apply to Playbook
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg">View Data</button>
          </div>
        </div>
      ))}
    </div>
  );
}
