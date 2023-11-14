import "flowbite";
import React from "react";
import { useLocation } from "react-router-dom";

const Setting = () => {
  const path = useLocation();
  let path2 = path.pathname;
  path2 = path2.toString();
  const withoutSlash = path2.replace(/^\/+/g, "");
  const pathName = withoutSlash.charAt(0).toUpperCase() + withoutSlash.slice(1);

  return (
    <div className="md:w-[calc(100%_-_280px)] ml-auto pt-20 md:pr-16 pb-3 md:pb-0">
      <div className=" border-b pb-3 mb-4 pr-3">
        <h2 className="text-xl ml-3 md:ml-0  md:text-3xl font-bold ">{pathName}</h2>
      </div>

      <div className="flex md:flex-row flex-col gap-6 items-start px-3 md:px-0">
        <div className="left md:w-1/2 w-full py-6 border border-slate-500 rounded-lg p-5 flex flex-col gap-y-5">
          <div>
            <h2 className="mb-3">Email</h2>
            <div className="flex items-center gap-x-2">
              <input
                type="email"
                placeholder="xyz@email.com"
                className="md:w-[calc(100%_-_190px)] bg-transparent border border-[#C4C4C4]"
              />
              <p className="text-red-400 cursor-pointer md:text-sm text-xs">
                Change Email
              </p>
            </div>
          </div>
          <div>
            <h2 className="mb-3">Phone Number</h2>
            <div className="flex items-center gap-x-2">
              <input
                type="number"
                placeholder="+8801000000000"
                className="md:w-[calc(100%_-_190px)] bg-transparent border border-[#C4C4C4]"
              />
              <p className="text-red-400 cursor-pointer md:text-sm text-xs">
                Change Phone Number
              </p>
            </div>
          </div>
        </div>
        <div className="right md:w-1/2 w-full py-6  border border-slate-500 rounded-lg p-5">
          <div>
            <h2 className="mb-3">Change Password</h2>
            <div className="flex flex-col gap-y-2">
              <input
                type="email"
                placeholder="Enter Your Current Password"
                className="w-full bg-transparent border border-[#C4C4C4]"
              />
              <input
                type="email"
                placeholder="Enter A New Password"
                className="w-full bg-transparent border border-[#C4C4C4]"
              />
              <input
                type="email"
                placeholder="Confirm Your New Password"
                className="w-full bg-transparent border border-[#C4C4C4]"
              />
              <button className="w-full bg-[#D85545] py-3 rounded mt-3 text-white font-semibold">
                Change Pin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
