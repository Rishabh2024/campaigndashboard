export default function StatsCard({ icon, title, value, percent }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex flex-col gap-3">
      <div className="flex justify-between">
        <span className="text-2xl">{icon}</span>
        <span className="text-green-600 text-sm">{percent}</span>
      </div>

      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-semibold">{value}</h2>
    </div>
  );
}
