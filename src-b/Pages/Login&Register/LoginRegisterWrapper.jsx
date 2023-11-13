import "flowbite";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
// import { Tabs } from "flowbite-react";

const LoginRegisterWrapper = () => {
  const [tab, setTab] = useState("login");
  return (
    <div className="login-register w-full h-screen bg-hero-pattern-mobile md:bg-hero-pattern-desktop">
      <div className="container mx-auto h-screen">
        <div className="w-full h-full flex justify-center md:justify-between md:items-center">
          <div className="text hidden pl-2 md:block">
            <h1 className="text-3xl pb-2 font-bold text-[#D85545]">LOGO</h1>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              soluta non vel accusamus, numquam est! Placeat impedit quae
              corrupti qui.
            </p>
          </div>
          <div className="w-[348px] md:w-[428px] sm:rounded-lg">
            <div className="p-0 md:border md:rounded-lg md:bg-white sm:overflow-hidden">
              {/* tab navs */}
              <div className="w-full mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  className="p-0 flex justify-center flex-wrap gap-1 -mb-px text-sm font-medium text-center"
                  id="myTab"
                  data-tabs-toggle="#myTabContent"
                  role="tablist"
                >
                  <li className="w-[48%]" role="presentation">
                    <button
                      onClick={() => setTab("login")}
                      className={`${
                        tab == "login"
                          ? "border-[#D85545] inline-block w-full p-4 border-b-2 text-lg"
                          : "inline-block w-full p-4 border-b-2 text-lg"
                      }`}
                      id="login-tab"
                      data-tabs-target="#login"
                      type="button"
                      role="tab"
                      aria-controls="login"
                      aria-selected="false"
                    >
                      Login
                    </button>
                  </li>
                  <li className="w-[48%]" role="presentation">
                    <button
                      onClick={() => setTab("register")}
                      className={` ${
                        tab != "login"
                          ? "border-[#D85545] inline-block w-full p-4 border-b-2 text-lg hover:text-gray-600 hover:border-gray-300"
                          : " inline-block w-full p-4 border-b-2 text-lg hover:text-gray-600 hover:border-gray-300"
                      }""`}
                      id="register-tab"
                      data-tabs-target="#register"
                      type="button"
                      role="tab"
                      aria-controls="register"
                      aria-selected="false"
                    >
                      Sing up
                    </button>
                  </li>
                </ul>
              </div>
              {/* all tabs */}
              <div id="myTabContent">
                <div
                  //   className="hidden"
                  className={`${tab == "login" ? "block" : "hidden"}`}
                  id="login"
                  role="tabpanel"
                  aria-labelledby="login-tab"
                >
                  <Login />
                </div>
                <div
                  //   className="hidden"
                  className={`${tab != "login" ? "block" : "hidden"}`}
                  id="register"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                  <Register />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterWrapper;
