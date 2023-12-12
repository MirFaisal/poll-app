import 'flowbite'
import React from "react";
import { NavLink } from "react-router-dom";
import PollOption from "../../Components/PollOption/PollOpotion";
import PostReacts from "../../Components/PostReacts/PostReacts";
import ReactsChart from "../../Components/ReactsChart/ReactsChart";
import RightAdd from "../../Components/RightAdd/RightAdd";

const Profile = () => {
  return (
    <div className="md:w-[calc(100%_-_617px)] md:ml-[280px] pt-20 md:pr-16 pb-3 md:pb-10 px-3 ">
      <div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:items-start border-b pb-3 text-center md:text-left">
          <img
            className="w-20 h-20 rounded-full"
            src="./avatar/mir.jpg"
            alt=""
          />
          <div>
            <div className="flex gap-x-3 items-center justify-center">
              <p className="text-xl font-semibold md:mb-0 mb-3">Mir Fasial</p>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.603 2.299C7.02496 1.81223 7.54673 1.42196 8.13287 1.15468C8.71901 0.887407 9.3558 0.74939 10 0.750002C11.357 0.750002 12.573 1.35 13.397 2.299C14.0397 2.25311 14.6847 2.34609 15.2883 2.57161C15.8919 2.79713 16.4399 3.14992 16.895 3.606C17.3509 4.06106 17.7036 4.60888 17.9291 5.21226C18.1546 5.81564 18.2477 6.46047 18.202 7.103C18.6886 7.52505 19.0787 8.04686 19.3458 8.633C19.6129 9.21913 19.7507 9.85588 19.75 10.5C19.7506 11.1442 19.6126 11.781 19.3453 12.3671C19.078 12.9533 18.6878 13.475 18.201 13.897C18.2467 14.5395 18.1536 15.1844 17.9281 15.7877C17.7026 16.3911 17.3499 16.9389 16.894 17.394C16.4389 17.8499 15.8911 18.2026 15.2877 18.4281C14.6844 18.6536 14.0395 18.7467 13.397 18.701C12.975 19.1878 12.4533 19.578 11.8671 19.8453C11.281 20.1126 10.6442 20.2506 10 20.25C9.3558 20.2506 8.71901 20.1126 8.13287 19.8453C7.54673 19.578 7.02496 19.1878 6.603 18.701C5.96038 18.747 5.31538 18.6542 4.71181 18.4289C4.10824 18.2035 3.56023 17.8509 3.105 17.395C2.64897 16.9398 2.29622 16.3919 2.0707 15.7883C1.84518 15.1847 1.75218 14.5397 1.798 13.897C1.31141 13.4749 0.921328 12.9531 0.654228 12.367C0.387128 11.7809 0.249266 11.1441 0.250003 10.5C0.250003 9.143 0.850003 7.927 1.799 7.103C1.75326 6.46047 1.8463 5.81562 2.07182 5.21222C2.29734 4.60883 2.65005 4.06103 3.106 3.606C3.56103 3.15005 4.10883 2.79734 4.71222 2.57182C5.31562 2.3463 5.96047 2.25326 6.603 2.299ZM13.61 8.686C13.67 8.60605 13.7134 8.51492 13.7377 8.41795C13.762 8.32098 13.7666 8.22014 13.7514 8.12136C13.7361 8.02257 13.7013 7.92783 13.6489 7.8427C13.5965 7.75757 13.5276 7.68378 13.4463 7.62565C13.3649 7.56753 13.2728 7.52624 13.1753 7.50423C13.0778 7.48222 12.9769 7.47992 12.8785 7.49746C12.7801 7.51501 12.6862 7.55205 12.6023 7.60641C12.5184 7.66077 12.4462 7.73135 12.39 7.814L9.154 12.344L7.53 10.72C7.38783 10.5875 7.19978 10.5154 7.00548 10.5188C6.81118 10.5223 6.62579 10.601 6.48838 10.7384C6.35097 10.8758 6.27226 11.0612 6.26883 11.2555C6.2654 11.4498 6.33752 11.6378 6.47 11.78L8.72 14.03C8.79699 14.1069 8.8898 14.1662 8.99199 14.2036C9.09418 14.2411 9.2033 14.2559 9.31177 14.2469C9.42024 14.238 9.52546 14.2055 9.62013 14.1519C9.7148 14.0982 9.79665 14.0245 9.86 13.936L13.61 8.686Z"
                  fill="#3CD8A3"
                />
              </svg>
            </div>
            <div className="flex justify-center md:justify-start gap-x-3 mt-0 text-xs md:text-sm ">
              <span>85 Posts</span>
              <span>100 Followers</span>
              <span>89 Followings</span>
            </div>
            <div className="flex justify-center md:justify-start gap-3 md:mt-5 mt-2 ">
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
            <i className="fa-solid fa-paper-plane absolute right-3 top-1/2 translate-y-[-50%]"></i>
            <input className="w-full" type="text" placeholder="Comment Here" />
          </div>
        </div>
      </div>
      <RightAdd />
    </div>
  );
};

export default Profile;
