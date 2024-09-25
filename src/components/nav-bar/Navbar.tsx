import { NavLink } from "react-router-dom";
import { UserIcon } from "../../assets/svg-icons";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-[#eafbff] z-20 px-2">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex-1">
          <NavLink className="title" to="/">
            <div className="flex items-center gap-3">
              <img
                src={"src/assets/logo2.png"}
                alt="Logo"
                width={"70px"}
                height={"70px"}
              />
              <div className="font-semibold text-lg text-[#0a0391] font-mono">
                INFOSEC Learning
              </div>
            </div>
          </NavLink>
        </div>
        <div className="flex-1">
          <div className="flex-1 flex justify-center gap-6 font-semibold text-lg text-[#0a0391] font-mono">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/add-job">About Us</NavLink>
          </div>
        </div>
        <div className="flex flex-1  justify-end">
          <NavLink
            className="user-img flex items-center gap-2"
            to="/user-profile"
          >
            <UserIcon />
            <p className="text-sm">Logout</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
