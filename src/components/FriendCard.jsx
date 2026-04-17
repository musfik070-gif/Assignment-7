import { useNavigate } from "react-router-dom";

function FriendCard({ friend }) {
  const navigate = useNavigate();

  const getStatusColor = () => {
    if (friend.status === "overdue") return "bg-red-500";
    if (friend.status === "almost due") return "bg-yellow-400";
    return "bg-green-600";
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white p-5 sm:p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition text-center"
    >
      {/* Image */}
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 object-cover"
      />

      {/* Name */}
      <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
        {friend.name}
      </h3>

      {/* Days */}
      <p className="text-sm text-gray-500 mt-1">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex justify-center gap-2 mt-3 flex-wrap">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-[#CBFADB] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status */}
      <div
        className={`mt-3 text-white text-xs px-3 py-1 rounded-full inline-block ${getStatusColor()}`}
      >
        {friend.status}
      </div>
    </div>
  );
}

export default FriendCard;
