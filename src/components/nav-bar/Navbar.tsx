import { NavLink } from "react-router-dom";
import { UserIcon } from "../../assets/svg-icons";

const Navbar = () => {
  // const linkClass = ({ isActive }: { isActive: boolean }) =>
  //   isActive ? "link link-active" : "link";

  return (
    <nav className="sticky top-0 bg-[#eafbff] z-10">
      <div className="flex justify-between items-center p-2">
        <div>
          <NavLink className="title" to="/">
            <div className="flex justify-between items-center gap-2">
              <img
                src={"src/assets/logo2.png"}
                alt="Logo"
                width={"34px"}
                height={"34px"}
                // className="rounded-xl"
              />
              <div>
                <div className="font-semibold text-[#0a0391] font-mono">
                  INFOSEC Learning
                </div>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="flex gap-3 font-semibold text-[#0a0391] font-mono items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/add-job">About Us</NavLink>
          <NavLink className="user-img" to="/user-profile">
            <div className="flex font-semibold items-center">
              <UserIcon />
              <p className="text-xs">Logout</p>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
