import { Link } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import PollOption from "../PollOption/PollOpotion";
import PostReacts from "../PostReacts/PostReacts";
import ReactsChart from "../ReactsChart/ReactsChart";

const PostCard = ({ className }) => {
  const start = ["A", "B", "C", "D"];
  return (
    <>
      <div
        className={`mt-5 mx-1 p-4 rounded border md:max-w-screen-lg lg:mx-auto ${className}`}
      >
        {/* post author info */}
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
        <div className="w-full md:rounded-full rounded-lg bg-primaryLight text-center px-3 py-3 mt-3">
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
          {/* ======================================================================================================= */}
          {/* ======================================================================================================= */}
          {/* ======================================================================================================= */}
          <button
            data-modal-target="share-modal"
            data-modal-toggle="share-modal"
            className="flex items-center gap-x-2"
          >
            <i className="fa-light fa-share-nodes"></i>
            Share
          </button>

          <div
            id="share-modal"
            tabindex="-1"
            aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative  w-full max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow  px-4">
                <div class="pt-5  flex items-center justify-between rounded-t ">
                  <div className="flex justify-center w-full gap-3">
                    <p className="py-2 px-3 border text-[#252525] border-slate-200 rounded">
                      /http/lcpcspkfkde.com
                    </p>
                    <button className="bg-[#D85545] py-2 px-3 text-white">
                      Copy Link
                    </button>
                  </div>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="share-modal"
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

                <div class="py-4 flex flex-col gap-y-10 mt-10">
                  <p className="text-center text-[#525252]">Share With</p>
                  <div className="icon flex justify-center gap-x-6">
                    <svg
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_83_1770)">
                        <path
                          d="M48.5 0H0.5V48H48.5V0Z"
                          fill="url(#paint0_linear_83_1770)"
                        />
                        <path
                          d="M20.3824 31.2093V48H27.4412V31.2093H33.0294L34.2059 24.4341H27.7353V20.0155C27.7353 18.2481 28.6176 16.4806 31.5588 16.4806H34.5V10.5891C34.5 10.5891 31.8529 10 29.2059 10C23.9118 10 20.3824 13.2403 20.3824 19.1318V24.4341H14.5V31.2093H20.3824Z"
                          fill="white"
                        />
                      </g>
                      <rect
                        x="1"
                        y="0.5"
                        width="47"
                        height="47"
                        rx="3.5"
                        stroke="black"
                        stroke-opacity="0.1"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_83_1770"
                          x1="24.5"
                          y1="0"
                          x2="24.5"
                          y2="48"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#1AAFFF" />
                          <stop offset="1" stop-color="#0563DF" />
                        </linearGradient>
                        <clipPath id="clip0_83_1770">
                          <rect
                            x="0.5"
                            width="48"
                            height="48"
                            rx="4"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_83_1771)">
                        <path d="M48.5 0H0.5V48H48.5V0Z" fill="#1DA1F2" />
                        <path
                          d="M40.5 14C39.3 14.6 38.1 14.8 36.7 15C38.1 14.2 39.1 13 39.5 11.4C38.3 12.2 36.9 12.6 35.3 13C34.1 11.8 32.3 11 30.5 11C26.3 11 23.1 15 24.1 19C18.7 18.8 13.9 16.2 10.5 12.2C8.7 15.2 9.7 19 12.5 21C11.5 21 10.5 20.6 9.5 20.2C9.5 23.2 11.7 26 14.7 26.8C13.7 27 12.7 27.2 11.7 27C12.5 29.6 14.9 31.6 17.9 31.6C15.5 33.4 11.9 34.4 8.5 34C11.5 35.8 14.9 37 18.5 37C30.7 37 37.5 26.8 37.1 17.4C38.5 16.6 39.7 15.4 40.5 14Z"
                          fill="white"
                        />
                      </g>
                      <rect
                        x="1"
                        y="0.5"
                        width="47"
                        height="47"
                        rx="3.5"
                        stroke="black"
                        stroke-opacity="0.1"
                      />
                      <defs>
                        <clipPath id="clip0_83_1771">
                          <rect
                            x="0.5"
                            width="48"
                            height="48"
                            rx="4"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_83_1772)">
                        <path
                          d="M48.5 0H0.5V48H48.5V0Z"
                          fill="url(#paint0_radial_83_1772)"
                        />
                        <path
                          d="M48.5 0H0.5V48H48.5V0Z"
                          fill="url(#paint1_radial_83_1772)"
                        />
                        <path
                          d="M24.5 10.4819C28.8735 10.4819 29.4699 10.4819 31.259 10.4819C32.8494 10.4819 33.6446 10.8795 34.241 11.0783C35.0361 11.4759 35.6325 11.6747 36.2289 12.2711C36.8253 12.8675 37.2229 13.4639 37.4217 14.259C37.6205 14.8554 37.8193 15.6506 38.0181 17.241C38.0181 19.0301 38.0181 19.4277 38.0181 24C38.0181 28.5723 38.0181 28.9699 38.0181 30.759C38.0181 32.3494 37.6205 33.1446 37.4217 33.741C37.0241 34.5361 36.8253 35.1325 36.2289 35.7289C35.6325 36.3253 35.0361 36.7229 34.241 36.9217C33.6446 37.1205 32.8494 37.3193 31.259 37.5181C29.4699 37.5181 29.0723 37.5181 24.5 37.5181C19.9277 37.5181 19.5301 37.5181 17.741 37.5181C16.1506 37.5181 15.3554 37.1205 14.759 36.9217C13.9639 36.5241 13.3675 36.3253 12.7711 35.7289C12.1747 35.1325 11.7771 34.5361 11.5783 33.741C11.3795 33.1446 11.1807 32.3494 10.9819 30.759C10.9819 28.9699 10.9819 28.5723 10.9819 24C10.9819 19.4277 10.9819 19.0301 10.9819 17.241C10.9819 15.6506 11.3795 14.8554 11.5783 14.259C11.9759 13.4639 12.1747 12.8675 12.7711 12.2711C13.3675 11.6747 13.9639 11.2771 14.759 11.0783C15.3554 10.8795 16.1506 10.6807 17.741 10.4819C19.5301 10.4819 20.1265 10.4819 24.5 10.4819ZM24.5 7.5C19.9277 7.5 19.5301 7.5 17.741 7.5C15.9518 7.5 14.759 7.89759 13.7651 8.29518C12.7711 8.69277 11.7771 9.28916 10.7831 10.2831C9.78916 11.2771 9.39157 12.0723 8.79518 13.2651C8.39759 14.259 8.1988 15.4518 8 17.241C8 19.0301 8 19.6265 8 24C8 28.5723 8 28.9699 8 30.759C8 32.5482 8.39759 33.741 8.79518 34.7349C9.19277 35.7289 9.78916 36.7229 10.7831 37.7169C11.7771 38.7108 12.5723 39.1084 13.7651 39.7048C14.759 40.1024 15.9518 40.3012 17.741 40.5C19.5301 40.5 20.1265 40.5 24.5 40.5C28.8735 40.5 29.4699 40.5 31.259 40.5C33.0482 40.5 34.241 40.1024 35.2349 39.7048C36.2289 39.3072 37.2229 38.7108 38.2169 37.7169C39.2108 36.7229 39.6084 35.9277 40.2048 34.7349C40.6024 33.741 40.8012 32.5482 41 30.759C41 28.9699 41 28.3735 41 24C41 19.6265 41 19.0301 41 17.241C41 15.4518 40.6024 14.259 40.2048 13.2651C39.8072 12.2711 39.2108 11.2771 38.2169 10.2831C37.2229 9.28916 36.4277 8.89157 35.2349 8.29518C34.241 7.89759 33.0482 7.6988 31.259 7.5C29.4699 7.5 29.0723 7.5 24.5 7.5Z"
                          fill="white"
                        />
                        <path
                          d="M24.5 15.4518C19.7289 15.4518 15.9518 19.2289 15.9518 24C15.9518 28.7711 19.7289 32.5482 24.5 32.5482C29.2711 32.5482 33.0482 28.7711 33.0482 24C33.0482 19.2289 29.2711 15.4518 24.5 15.4518ZM24.5 29.5663C21.5181 29.5663 18.9337 27.1807 18.9337 24C18.9337 21.0181 21.3193 18.4337 24.5 18.4337C27.4819 18.4337 30.0663 20.8193 30.0663 24C30.0663 26.9819 27.4819 29.5663 24.5 29.5663Z"
                          fill="white"
                        />
                        <path
                          d="M33.247 17.241C34.3449 17.241 35.2349 16.3509 35.2349 15.253C35.2349 14.1551 34.3449 13.2651 33.247 13.2651C32.1491 13.2651 31.259 14.1551 31.259 15.253C31.259 16.3509 32.1491 17.241 33.247 17.241Z"
                          fill="white"
                        />
                      </g>
                      <rect
                        x="1"
                        y="0.5"
                        width="47"
                        height="47"
                        rx="3.5"
                        stroke="black"
                        stroke-opacity="0.1"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_83_1772"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(17.5 50) rotate(-81.5289) scale(47.5184)"
                        >
                          <stop stop-color="#FFDD55" />
                          <stop offset="0.1" stop-color="#FFDD55" />
                          <stop offset="0.517936" stop-color="#FF442C" />
                          <stop offset="1" stop-color="#FF1ED2" />
                        </radialGradient>
                        <radialGradient
                          id="paint1_radial_83_1772"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(10.5 -3) rotate(77.1957) scale(22.561 62.6911)"
                        >
                          <stop offset="0.096473" stop-color="#7000C9" />
                          <stop
                            offset="0.408416"
                            stop-color="#9A00E2"
                            stop-opacity="0.723958"
                          />
                          <stop
                            offset="0.975495"
                            stop-color="#AD00FF"
                            stop-opacity="0"
                          />
                        </radialGradient>
                        <clipPath id="clip0_83_1772">
                          <rect
                            x="0.5"
                            width="48"
                            height="48"
                            rx="4"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_83_1773)">
                        <path d="M48.5 0H0.5V48H48.5V0Z" fill="#2867B2" />
                        <path
                          d="M37.2828 9H11.7172C10.4938 9 9.5 9.96406 9.5 11.1485V36.8515C9.5 38.0399 10.4938 39 11.7172 39H37.2828C38.5062 39 39.5 38.0359 39.5 36.8515V11.1485C39.5 9.96013 38.5062 9 37.2828 9ZM18.5946 34.1167H14.0651V20.5687H18.5946V34.1167ZM16.3299 18.7193H16.3022C14.7818 18.7193 13.7999 17.6805 13.7999 16.378C13.7999 15.0756 14.8134 14.0367 16.3616 14.0367C17.9097 14.0367 18.8639 15.048 18.8955 16.378C18.8955 17.6765 17.9136 18.7193 16.3338 18.7193H16.3299ZM34.9349 34.1167H30.4054V26.8686C30.4054 25.0467 29.7481 23.8033 28.1089 23.8033C26.8578 23.8033 26.1134 24.6414 25.7848 25.452C25.666 25.7432 25.6344 26.1445 25.6344 26.5498V34.1167H21.1049C21.1049 34.1167 21.1642 21.8397 21.1049 20.5687H25.6344V22.489C26.2362 21.5643 27.3131 20.2539 29.7164 20.2539C32.6978 20.2539 34.9349 22.1899 34.9349 26.3531V34.1207V34.1167Z"
                          fill="white"
                        />
                      </g>
                      <rect
                        x="1"
                        y="0.5"
                        width="47"
                        height="47"
                        rx="3.5"
                        stroke="black"
                        stroke-opacity="0.1"
                      />
                      <defs>
                        <clipPath id="clip0_83_1773">
                          <rect
                            x="0.5"
                            width="48"
                            height="48"
                            rx="4"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <i className="fa-solid fa-ellipsis h-12 w-12 flex justify-center items-center rounded bg-slate-200"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================================================================= */}
          {/* ======================================================================================================= */}
          {/* ======================================================================================================= */}
        </div>
        {/* react, comment and share chart */}
        <div className="mt-5">
          <ReactsChart />
        </div>
        {/* comment, view all comment */}
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

      <div className="mt-5 mx-1 p-4 rounded border md:max-w-screen-lg lg:mx-auto">
        <div className="my-3 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <img
              className="w-10 h-10 rounded-tr"
              src="./avatar/mir.jpg"
              alt=""
            />
            <p>Mir Fasial</p>
            <i className="fa-regular fa-ellipsis-vertical"></i>
          </div>
        </div>
        {/* post discription */}
        <div className="w-full text-left px-3 py-3 mt-3">
          <p>
            Lorem ipsum dolor sit amet consectetur. Nunc ut lorem egestas
            quisque quis sit et. Id lorem aliquam turpis ultricies ut mauris.
            Enim posuere nisl purus suspendisse venenatis interdum ornare
          </p>
        </div>
        {/* options*/}
        <div className="mt-3 flex gap-x-3 md:gao-x-7 gap-y-3 justify-center flex-wrap flex-col">
          <PollOption
            className="w-full !text-left pl-4 bg-[#E7FEF6] hover:bg-[#E7FEF6] after:content-[''] after:w-[70%] after:h-full after:absolute after:left-0 after:top-0 after:bg-[#45F7BB] relative z-[1] after:z-[-1] overflow-hidden after:rounded-full cursor-pointer"
            innerHtml="01. Yes"
          />
          <PollOption
            className="w-full !text-left pl-4 bg-[#E7FEF6] hover:bg-[#E7FEF6] after:content-[''] after:w-[30%] after:h-full after:absolute after:left-0 after:top-0 after:bg-[#45F7BB] relative z-[1] after:z-[-1] overflow-hidden after:rounded-full cursor-pointer"
            innerHtml="02. No"
          />
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
        {/* comment, view all comment */}
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
      <Modal />
    </>
  );
};

export default PostCard;
