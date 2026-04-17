import { useState } from "react";
import { useTimeline } from "../context/TimelineContext";

function Timeline() {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="bg-[#f5f7f6] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Timeline</h1>

        <div className="flex flex-wrap gap-3 mb-6">
          {["All", "Call", "Text", "Video"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm sm:text-base ${
                filter === type ? "bg-green-700 text-white" : "bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {filteredTimeline.length === 0 ? (
          <p className="text-gray-500">No interactions yet.</p>
        ) : (
          <div className="space-y-4">
            {filteredTimeline.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>

                <div className="text-xl self-start sm:self-auto">
                  {item.type === "Call" && "📞"}
                  {item.type === "Text" && "💬"}
                  {item.type === "Video" && "🎥"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline;
