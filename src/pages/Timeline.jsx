import { useTimeline } from "../context/TimelineContext";

function Timeline() {
  const { timeline } = useTimeline();

  return (
    <div className="bg-[#f5f7f6] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Timeline</h1>

        {timeline.length === 0 ? (
          <p className="text-gray-500">No interactions yet.</p>
        ) : (
          <div className="space-y-4">
            {timeline.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>

                <div className="text-xl">
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
