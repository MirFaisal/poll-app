import React from "react";

const EditProfile = () => {
  return (
    <div className="md:w-[calc(100%_-_280px)] ml-auto pt-20 md:pr-16 pb-3 md:pb-0">
      <div className="flex md:flex-row flex-col gap-6 items-start px-3 md:px-0">
        <div className="left md:w-1/2 w-full py-6 border border-slate-500 rounded-lg p-5 flex flex-col items-center gap-y-5">
          <img
            className="md:w-72 md:h-72 w-full rounded-full"
            src="./avatar/mir.jpg"
            alt=""
          />
          <label
            className="text-xl font-semibold cursor-pointer"
            htmlFor="choosePhoto"
          >
            Choose Photo
          </label>
          <input type="file" id="choosePhoto" hidden />
        </div>

        <div className="right md:w-1/2 w-full ">
          <div className="flex flex-col gap-3 w-full  py-6  border border-slate-500 rounded-lg p-5">
            <div>
              <h2 className="mb-1 text-sm font-semibold">Name</h2>
              <input
                type="text"
                placeholder="Reaz Hossain"
                className="w-full bg-transparent py-1 border border-[#C4C4C4] "
              />
            </div>
            <div>
              <h2 className="mb-1 text-sm font-semibold">Number</h2>
              <input
                type="number"
                placeholder="123456478"
                className="w-full bg-transparent py-1 border border-[#C4C4C4] "
              />
            </div>
            <div>
              <h2 className="mb-1 text-sm font-semibold">Email</h2>
              <input
                type="email"
                placeholder="xyz@email.com"
                className="w-full bg-transparent py-1 border border-[#C4C4C4] "
              />
            </div>
            <div>
              <h2 className="mb-1 text-sm font-semibold">Gender</h2>
              <select className="w-full bg-transparent py-1 border border-[#C4C4C4] ">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <button className="w-[125px] mx-auto block bg-[#D85545] py-3 rounded mt-3 text-white font-semibold">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
