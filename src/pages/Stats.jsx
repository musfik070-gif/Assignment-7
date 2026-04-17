import { useTimeline } from "../context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Stats() {
  const { timeline } = useTimeline();

  // Count interactions
  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  timeline.forEach((item) => {
    counts[item.type]++;
  });

  const data = [
    { name: "Call", value: counts.Call },
    { name: "Text", value: counts.Text },
    { name: "Video", value: counts.Video },
  ];

  const COLORS = ["#16a34a", "#6366f1", "#e4808c"];

  return (
    <div className="bg-[#f5f7f6] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Friendship Analytics</h1>

        <div className="bg-white p-6 rounded-xl shadow flex justify-center">
          {timeline.length === 0 ? (
            <p className="text-gray-500">No data yet. Start interacting!</p>
          ) : (
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stats;
