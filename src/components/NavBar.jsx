import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="nextrole logo" className="h-9 w-9 object-cover" />
          <span className="text-lg font-semibold text-white">
           next role
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : "text-zinc-300 hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive
                ? "text-white"
                : "text-zinc-300 hover:text-white"
            }
          >
            Jobs
          </NavLink>

          <NavLink
            to="/jobs"
            className="text-green-400 hover:text-green-300"
          >
            Add Job
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
