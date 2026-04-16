function Home() {
  return (
    <div className="bg-[#f5f7f6] min-h-screen py-16">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="text-center flex flex-col items-center">
          {/* Title */}
          <h1
            className="
            text-[28px]
            sm:text-[36px]
            md:text-[44px]
            lg:text-[52px]
            font-bold
            text-gray-800
            leading-[1.2]
            max-w-[800px]
          "
          >
            Friends to keep close in your life
          </h1>

          {/* Subtitle */}
          <p
            className="
            mt-4
            text-gray-500
            text-[14px]
            sm:text-[15px]
            md:text-[16px]
            leading-relaxed
            max-w-[650px]
          "
          >
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          {/* Button */}
          <button
            className="
            mt-6
            bg-green-700
            text-white
            px-6
            py-3
            rounded-lg
            font-medium
            hover:bg-green-800
            transition
          "
          >
            + Add a Friend
          </button>
        </div>

        {/* Stats Cards */}
        <div
          className="
          mt-14
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          max-w-5xl
          mx-auto
        "
        >
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold text-gray-800">10</h2>
            <p className="text-gray-500 text-sm mt-1">Total Friends</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold text-gray-800">3</h2>
            <p className="text-gray-500 text-sm mt-1">On Track</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold text-gray-800">6</h2>
            <p className="text-gray-500 text-sm mt-1">Need Attention</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold text-gray-800">12</h2>
            <p className="text-gray-500 text-sm mt-1">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
