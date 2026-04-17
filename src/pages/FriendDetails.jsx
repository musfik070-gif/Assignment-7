import { useParams } from "react-router-dom";
import friends from "../data/friends.json";

import { useTimeline } from "../context/TimelineContext";
import toast from "react-hot-toast";

function FriendDetails() {
  const { id } = useParams();
  const { addEntry } = useTimeline();

  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) {
    return <div className="p-10 text-red-500">Friend not found</div>;
  }

  const getStatusColor = () => {
    if (friend.status === "overdue") return "bg-red-500";
    if (friend.status === "almost due") return "bg-yellow-400";
    return "bg-green-600";
  };

  return (
    <div className="bg-[#f5f7f6] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />

          <h2 className="text-lg font-semibold">{friend.name}</h2>

          <div
            className={`mt-2 text-white text-xs px-3 py-1 rounded-full inline-block ${getStatusColor()}`}
          >
            {friend.status}
          </div>

          {/* Tags */}
          <div className="flex justify-center gap-2 mt-3 flex-wrap">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-gray-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-4 italic">"{friend.bio}"</p>

          <p className="text-gray-400 text-sm mt-2">{friend.email}</p>

          {/* Actions */}
          <div className="mt-6 space-y-3">
            <button className="w-full border rounded-lg py-2">
              ⏰ Snooze 2 Weeks
            </button>

            <button className="w-full border rounded-lg py-2">
              📦 Archive
            </button>

            <button className="w-full border rounded-lg py-2 text-red-500">
              🗑️ Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">{friend.days_since_contact}</h3>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">{friend.goal}</h3>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">{friend.next_due_date}</h3>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-800">Relationship Goal</h3>
              <p className="text-gray-500 text-sm">
                Connect every {friend.goal} days
              </p>
            </div>

            <button className="border px-4 py-1 rounded">Edit</button>
          </div>

          {/* Quick Check-in */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => {
                  addEntry("Call", friend.name);
                  toast.success("Call logged!");
                }}
                className="border rounded-lg py-4"
              >
                📞 Call
              </button>

              <button
                onClick={() => {
                  addEntry("Text", friend.name);
                  toast.success("Text logged!");
                }}
                className="border rounded-lg py-4"
              >
                💬 Text
              </button>

              <button
                onClick={() => {
                  addEntry("Video", friend.name);
                  toast.success("Video logged!");
                }}
                className="border rounded-lg py-4"
              >
                🎥 Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendDetails;
