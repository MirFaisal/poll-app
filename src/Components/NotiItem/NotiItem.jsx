import React from "react";

const NotiItem = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-3 bg-[#F1F1F1]">
        <div className="flex items-center gap-x-4">
          <div className="vectorImage w-10 h-10 bg-slate-300 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full"
              src=""
              alt=""
            />
          </div>
          <div className="notiName">
            <h3>
              Reaz <span className="text-[#D85545]">Comment</span> in you post.
            </h3>
            <span>8:45 PM</span>
          </div>
        </div>
        <div className="dot">
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
                    <li className="p-2 w-[300px] hover:bg-slate-100">
                      Mark as read
                    </li>
                    <li className="p-2 w-[300px] hover:bg-slate-100">Delete</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotiItem;
