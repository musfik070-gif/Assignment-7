import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow">
      <h1 className="font-bold text-xl">KeenKeeper</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/stats">Stats</Link>
      </div>
    </div>
  );
}

export default Navbar;
