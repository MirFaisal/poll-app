import "flowbite";
import React from "react";
import { useLocation } from "react-router-dom";
import NotiItem from "../../Components/NotiItem/NotiItem";

const Notification = () => {
  const path = useLocation();
  let path2 = path.pathname;
  path2 = path2.toString();
  const withoutSlash = path2.replace(/^\/+/g, "");
  const pathName = withoutSlash.charAt(0).toUpperCase() + withoutSlash.slice(1);

  return (
    <div className="md:max-w-screen-lg lg:mx-auto pt-20">
      <div className="flex justify-between md:max-w-screen-lg lg:mx-auto border-b pb-3 mb-4 pr-3">
        <h2 className="text-xl  md:text-3xl font-bold ">{pathName}</h2>
        <div className="dot cursor-pointer">
          <button
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            className="block  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="button"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>

          <div
            id="default-modal"
            tabindex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative">
              <div className="relative bg-white rounded shadow">
                <ul className="p-4">
                  <li className="p-2 w-[300px] hover:bg-slate-100">Mark as all read</li>
                  <li className="p-2 w-[300px] hover:bg-slate-100">Clear notification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="today">
        <h2 className="text-xl font-semibold">Today</h2>
        <div className="mt-6 flex flex-col gap-y-2">
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
        </div>
      </div>
      <div className="Yesterday">
        <h2 className="text-xl font-semibold mt-8">Today</h2>
        <div className="mt-6 flex flex-col gap-y-2">
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
        </div>
      </div>
    </div>
  );
};

export default Notification;
