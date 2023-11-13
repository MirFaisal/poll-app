import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const path = useLocation();
  console.log(path.pathname);
  return (
    <div className="fixed top-0 left-0 hidden md:block z-50">
      <div className="min-w-[240px] h-screen bg-primary pl-10 pr-2">
        <div className="logo pt-10">
          <h1 className="text-white font-bold text-2xl">LOGO</h1>
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-10">
            <ul className="flex flex-col gap-3">
              <Link to={"/"}>
                <li
                  className={`${
                    path.pathname == "/"
                      ? "py-2 bg-white text-primary pl-2 flex gap-2 items-center"
                      : "py-2 text-white pl-2 flex gap-2 items-center  hover:bg-white hover:text-primary duration-300"
                  }`}
                >
                  <i className="fa-regular fa-house"></i>Home
                </li>
              </Link>
              <Link to={"/notifications"}>
                <li
                  className={`${
                    path.pathname == "/notifications"
                      ? "py-2 bg-white text-primary pl-2 flex gap-2 items-center"
                      : "py-2 text-white pl-2 flex gap-2 items-center  hover:bg-white hover:text-primary duration-300"
                  }`}
                >
                  <i className="fa-sharp fa-light fa-bell-on"></i>Notification
                </li>
              </Link>
            </ul>
          </div>
          <div className="w-full h-32 mb-[120px]">
            <Link to={"/"}>
              <li
                className={`${
                  path.pathname == "setting"
                    ? "py-2 bg-white text-primary pl-2 flex gap-2 items-center duration-300"
                    : "py-2 text-white pl-2 flex gap-2 items-center  hover:bg-white hover:text-primary"
                }`}
              >
                <i className="fa-light fa-gear"></i>Setting
              </li>
            </Link>

            <button className="border mt-5 py-3 px-12 text-white hover:bg-white hover:border-transparent hover:text-primary duration-300">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
