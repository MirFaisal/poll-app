import 'flowbite'
import React from "react";
import { NavLink } from "react-router-dom";
import PollOption from "../../Components/PollOption/PollOpotion";
import PostReacts from "../../Components/PostReacts/PostReacts";
import ReactsChart from "../../Components/ReactsChart/ReactsChart";
import RightAdd from "../../Components/RightAdd/RightAdd";

const Profile = () => {
  return (
    <div className="md:w-[calc(100%_-_617px)] ml-[280px] pt-20 md:pr-16 pb-3 md:pb-10 ">
      <div>
        <div className="flex gap-4 items-start border-b pb-3">
          <img
            className="w-20 h-20 rounded-full"
            src="./avatar/mir.jpg"
            alt=""
          />
          <div>
            <p className="text-lg font-semibold">Mir Fasial</p>
            <div className="flex gap-x-3 mt-0">
              <span>85 Posts</span>
              <span>100 Followers</span>
              <span>89 Followings</span>
            </div>
            <div className="flex gap-3 mt-5">
              <button className="py-1 px-4 rounded bg-[#F6F6F6] hover:bg-[#252525] text-[#252525] hover:text-[#F6F6F6] font-medium">
                <NavLink to="/edit">Edit Profile</NavLink>
              </button>
              <button
                data-modal-target="default-modal3"
                data-modal-toggle="default-modal3"
                className="py-1 px-4 rounded bg-[#F6F6F6] hover:bg-[#252525] text-[#252525] hover:text-[#F6F6F6] font-medium"
              >
                View Details
              </button>

              <div
                id="default-modal3"
                tabindex="-1"
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 pt-1 md:p-5 border-b rounded-t dark:border-gray-600">
                      <div className="w-2/5 h-full px-3">
                        <img
                          className="w-full rounded-full"
                          src="./avatar/mir.jpg"
                          alt=""
                        />
                      </div>
                      <div className="w-3/5 pl-3 border-l flex">
                        <div className="flex flex-col gap-3 w-full">
                          <div>
                            <h2 className="mb-1 text-sm font-semibold">Name</h2>
                            <input
                              readOnly
                              type="text"
                              placeholder="Reaz Hossain"
                              className="w-full bg-transparent py-1 border border-[#C4C4C4] cursor-pointer"
                            />
                          </div>
                          <div>
                            <h2 className="mb-1 text-sm font-semibold">
                              Number
                            </h2>
                            <input
                              readOnly
                              type="number"
                              placeholder="123456478"
                              className="w-full bg-transparent py-1 border border-[#C4C4C4] cursor-pointer"
                            />
                          </div>
                          <div>
                            <h2 className="mb-1 text-sm font-semibold">
                              Email
                            </h2>
                            <input
                              readOnly
                              type="email"
                              placeholder="xyz@email.com"
                              className="w-full bg-transparent py-1 border border-[#C4C4C4] cursor-pointer"
                            />
                          </div>
                          <div>
                            <h2 className="mb-1 text-sm font-semibold">
                              Gender
                            </h2>
                            <input
                              readOnly
                              type="text"
                              placeholder="Male"
                              className="w-full bg-transparent py-1 border border-[#C4C4C4] cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="flex justify-end pl-3">
                          <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal3"
                          >
                            <svg
                              className="w-3 h-3"
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
                            <span className="sr-only">Close modal</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg  md:text-3xl font-bold  border-b pb-3 mt-11">
            My Post
          </h2>
        </div>
      </div>
      <div className="max-w-screen-md">
        <div className="my-3 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="./avatar/mir.jpg"
              alt=""
            />
            <p>Mir Fasial</p>
          </div>
          <i className="fa-regular fa-ellipsis-vertical"></i>
        </div>
        {/* post image and info */}
        <div className="w-full rounded overflow-hidden">
          <img className="w-full" src="./post/post.jpg" alt="post" />
        </div>
        {/* post discription */}
        <div className="w-full rounded-full bg-primaryLight text-center px-3 py-3 mt-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            delectus?
          </p>
        </div>
        {/* options*/}
        <div className="mt-3 flex gap-x-3 md:gao-x-7 gap-y-3 justify-center flex-wrap">
          <PollOption innerHtml="A. Somthin" />
          <PollOption innerHtml="B. Somthin" />
          <PollOption innerHtml="C. Somthin" />
          <PollOption innerHtml="D. Somthin" />
        </div>
        {/* post status */}
        <div className="flex justify-between mt-16 px-2 py-2 mb-3">
          <div
            role="button"
            data-modal-target="view-all-react"
            data-modal-toggle="view-all-react"
            className="flex gap-x-1"
          >
            <img src="./assets/likeicon.png" className="w-5 h-5" alt="" /> 7k
          </div>
          <div className="flex gap-4 text-gray-600">
            <div>570 comments</div>
            <div>570 Share</div>
            <div className="flex items-center gap-2">
              <i className="fa-light fa-eye"></i>
              4k
            </div>
          </div>
        </div>
        <div className="py-2 border-t border-b flex justify-between">
          <PostReacts />
          <button className="flex items-center gap-x-2">
            <i className="fa-sharp fa-regular fa-comment"></i>
            Commnet
          </button>

          <button className="flex items-center gap-x-2">
            <i className="fa-light fa-share-nodes"></i>
            Share
          </button>
        </div>
        {/* react, comment and share chart */}
        <div className="mt-5">
          <ReactsChart />
        </div>
        <div className="viewAllComment">
          <h3 className="font-semibold">View All Comments</h3>
          <div className="flex gap-2 items-center mt-5 mb-4">
            <img
              className="w-8 h-8 rounded-full"
              src="./avatar/mir.jpg"
              alt=""
            />
            <p className="font-semibold">Mir Fasial</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Laoreet volutpat dictumst
            aliquam aliquam etiam.
          </p>
          <div className="flex gap-5 mt-4 mb-5">
            <button className="flex items-center gap-x-2">
              <i className="fa-sharp fa-regular fa-heart"></i>
              React
            </button>
            <button className="flex items-center gap-x-2">
              <i className="fa-sharp fa-regular fa-comment"></i>
              Reply
            </button>
          </div>
          {/* comment here */}
          <div className="relative">
            <i className="fa-sharp fa-regular fa-plane absolute right-3 top-1/2 translate-y-[-50%]"></i>
            <input className="w-full" type="text" placeholder="Comment Here" />
          </div>
        </div>
      </div>
      <RightAdd />
    </div>
  );
};

export default Profile;
