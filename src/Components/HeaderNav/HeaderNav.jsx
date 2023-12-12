import "flowbite";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu";
const HeaderNav = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const path = useLocation();
  let path2 = path.pathname;
  path2 = path2.toString();
  const withoutSlash = path2.replace(/^\/+/g, "");
  const pathName = withoutSlash.charAt(0).toUpperCase() + withoutSlash.slice(1);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white z-50">
        <div className="flex items-center justify-between md:justify-end lg:justify-between p-4 md:pr-16 md:pl-64">
          <Link to={"/"} className="flex items-center md:hidden">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              LOGO
            </span>
          </Link>
          <div className="hidden lg:ml-60 xl:ml-0 lg:flex items-center gap-6 ">
            <h2 className="text-2xl font-bold pl-6">
              {path.pathname == "/"
                ? "Home"
                : path.pathname == "/profile"
                ? pathName
                : path.pathname == "/edit"
                ? pathName + " " + "Profile"
                : path.pathname == "/uploadcontent"
                ? withoutSlash.charAt(0).toUpperCase() +
                  withoutSlash.slice(1, 6) +
                  " " +
                  withoutSlash.slice(6)
                : path.pathname == "/imagepoll"
                ? "Upload content"
                : path.pathname == "/textpoll"
                ? "Upload content"
                : ""}
            </h2>
            {path.pathname == "/textpoll" ? (
              ""
            ) : (
              <input
                type="text"
                id="search-navbar"
                className="w-[400px] p-2 pl-10 text-sm text-gray-900 border border-gray-300 focus:ring-0 rounded bg-gray-50 focus:border-black"
                placeholder="Search your topic"
              />
            )}
          </div>

          <div className="hidden sm:block">
            <div className="flex gap-6 items-center">
              <button
                data-modal-target="createPost"
                data-modal-toggle="createPost"
                className="py-2 px-10 bg-primary text-white"
              >
                Create post
              </button>
              {/* ======================================================================================================= */}
              <div
                id="createPost"
                tabindex="-1"
                aria-hidden="true"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div class="relative  w-full max-w-2xl max-h-full">
                  <div class="relative bg-white rounded-lg shadow  px-4">
                    <div class="py-3  flex items-center justify-between border-b border-[#DBDBDB] rounded-t ">
                      <h3 class="text-xl font-semibold text-gray-900 ">
                        Select Your Category
                      </h3>
                      <button
                        type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="createPost"
                      >
                        <svg
                          class="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>

                    <div class="py-4 flex gap-x-4">
                      <Link
                        className="group  w-full p-2 md:p-4 rounded cursor-pointer hover:bg-[#D85545] flex flex-col items-center gap-y-4 border border-[#DBDBDB] hover:border-transparent transition-all duration-300"
                        to="/uploadcontent"
                        data-modal-hide="createPost"
                      >
                        <i class="fa-solid fa-video w-10 h-10 rounded-full flex items-center justify-center bg-[#FAE9E7] text-[#D85545]"></i>
                        <p className="group-hover:text-white text-black font-semibold transition-all duration-300">
                          Video/Image
                        </p>
                      </Link>
                      <Link
                        className="group  w-full p-2 md:p-4 rounded cursor-pointer hover:bg-[#D85545] flex flex-col items-center gap-y-4 border border-[#DBDBDB] hover:border-transparent transition-all duration-300"
                        to="/imagepoll"
                        data-modal-hide="createPost"
                      >
                        <i class="fa-regular fa-image w-10 h-10 rounded-full flex items-center justify-center bg-[#FAE9E7] text-[#D85545]"></i>
                        <p className="group-hover:text-white text-black font-semibold transition-all duration-300">
                          Image Poll
                        </p>
                      </Link>
                      <Link
                        className="group  w-full p-2 md:p-4 rounded cursor-pointer hover:bg-[#D85545] flex flex-col items-center gap-y-4 border border-[#DBDBDB] hover:border-transparent transition-all duration-300"
                        to="/textpoll"
                        data-modal-hide="createPost"
                      >
                        <i class="fa-solid fa-chart-simple w-10 h-10 rounded-full flex items-center justify-center bg-[#FAE9E7] text-[#D85545]"></i>
                        <p className="group-hover:text-white text-black font-semibold transition-all duration-300">
                          Poll
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* ======================================================================================================= */}
              <button
                onClick={() => setShow(!show)}
                type="button"
                className="flex text-sm rounded-full md:mr-0 focus:ring-gray-300"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <NavLink to="/profile">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="./avatar/mir.jpg"
                    alt="user photo"
                  />
                </NavLink>
              </button>
              {/* <!-- Dropdown menu --> */}
              {/* <div
                className={`${
                  !show
                    ? "hidden"
                    : "block z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                }`}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-gray-500 truncate ">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <NavLink
                      to={"/login"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </NavLink>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            onClick={() => setMenu(!menu)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            !menu
              ? "hidden"
              : "items-center justify-between w-full md:flex md:w-auto md:order-1"
          }`}
          id="navbar-search"
        >
          {/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Services
              </a>
            </li>
          </ul> */}
          <MobileNavMenu setMenu={setMenu} menu={menu} />
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;
