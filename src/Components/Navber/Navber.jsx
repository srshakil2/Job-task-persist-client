import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
const Navber = () => {
  return (
    <div className="bg-indigo-900 shadow-sm flex items-center   px-5 text-white">
      {/* py-3 lg:py-5 */}
      <div className="navbar-start h-20">
        <Link className="h-20" to={"/"}>
          <img
            className="h-full"
            src="https://img.icons8.com/?size=128&id=48262&format=png"
            alt=""
          />
        </Link>
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
            <NavLink>
              <Link
                to="about"
                smooth={true}
                // duration={500}
                className={({ isActive }) =>
                  isActive ? "text-gray-400" : "text-white"
                }
              >
                About
              </Link>
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
        </ul>
      </div>
    </div>
  );
};

export default Navber;
