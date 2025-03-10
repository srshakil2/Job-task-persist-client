import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div className="bg-indigo-900 shadow-sm flex items-center  py-3 lg:py-5 px-5 text-white">
      <div className="navbar-start">
        <a className="text-xl">daisyUI</a>
      </div>
      <div className="md:-ml-16">
        <ul className="flex items-center justify-center gap-4 px-1">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-gray-400" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/event-list"}
              className={({ isActive }) =>
                isActive ? "text-gray-400" : "text-white"
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "text-gray-400" : "text-white"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
