import "flowbite";
import React from "react";

const VideoPost = () => {
  return (
    <div>
      <div className="md:w-[calc(100%_-_280px)] ml-auto pt-20 md:pr-16 pb-3 md:pb-0">
        <div className=" border-b pb-3 mb-4 pr-3">
          <h2 className="text-xl ml-3 md:ml-0  md:text-2xl font-semibold ">
            Select your Video/Image
          </h2>
        </div>

        <div className="flex md:flex-row flex-col gap-6 items-start px-3 md:px-0">
          <div className="left md:w-4/5 w-full h-[calc(100vh_-_180px)] py-6  border-2 border-dotted border-slate-500 rounded-lg p-5 flex flex-col justify-center items-center gap-y-1">
            <i class="fa-solid fa-cloud-arrow-up"></i>
            <p className="text-[#363636]">Drag and Drop</p>
            <p className="text-[#363636]">or</p>
            <label
              className="py-1 px-4 bg-slate-100 rounded cursor-pointer mt-3"
              htmlFor="file"
            >
              Browse File
            </label>
            <input type="file" id="file" hidden />
          </div>
          <div className="right md:w-2/5 w-full py-6  border border-[#DBDBDB] rounded-lg p-5">
            <div>
              <h3 className="mb-7 font-bold text-lg">Upload your content</h3>
              <div className="flex flex-col">
                <label className="font-semibold text-base">Your text</label>
                <textarea
                  className="w-full h-24 border border-slate-200 focus:ring-0 focus:border-slate-300 mt-3 mb-8"
                  placeholder="Your text"
                ></textarea>
                <label htmlFor="" className="font-semibold text-base">
                  Create Option
                </label>
                <label
                  htmlFor="option"
                  className="border px-3 flex items-center mt-3 mb-5"
                >
                  <input id="option" type="radio" />
                  <input
                    type="text"
                    placeholder="Option 1"
                    className="w-full border-0 focus:ring-0"
                  />
                </label>
                <button className="text-left bg-slate-200 rounded flex items-center gap-x-4 py-2 px-3">
                  <i class="fa-solid fa-plus"></i>
                  <p className="font-medium">Add</p>
                </button>
                <label htmlFor="" className="mb-3 mt-8 font-semibold text-base">
                  Notice
                </label>
                <input
                  type="text"
                  placeholder="Your text"
                  className="border-slate-200 focus:ring-0 focus:border-slate-300 mb-8"
                />
                <button className=" bg-[#D85545] rounded flex items-center justify-center gap-x-4 py-3 px-3 text-white font-semibold">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPost;
