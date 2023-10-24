import "flowbite";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu";
const HeaderNav = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="fixed top-0 w-full bg-white z-50">
        <div className="max-w-screen-xl flex items-center justify-between md:justify-end lg:justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center md:hidden">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              LOGO
            </span>
          </Link>
          <div className="hidden lg:ml-60 xl:ml-0 lg:flex items-center gap-6 ">
            <h2 className="text-2xl font-bold">Home</h2>
            <input
              type="text"
              id="search-navbar"
              className="w-[400px] p-2 pl-10 text-sm text-gray-900 border border-gray-300 focus:ring-0 rounded bg-gray-50 focus:border-black"
              placeholder="Search your topic"
            />
          </div>

          <div className="hidden sm:block">
            <div className="flex gap-6 items-center">
              <button className="py-2 px-10 bg-primary text-white">
                Create post
              </button>
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
                <img
                  className="w-10 h-10 rounded-full"
                  src="./avatar/mir.jpg"
                  alt="user photo"
                />
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
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
              </div>
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
        <div className="hidden sm:block ">
          <h2 className="text-xl ml-7 md:text-3xl font-bold md:ml-[325px] mb-3">
            Posts
          </h2>
          <hr />
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;
