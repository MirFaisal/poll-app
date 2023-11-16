import PostCard from "../../Components/PostCard/PostCard";
import RightAdd from "../../Components/RightAdd/RightAdd";

const Home = () => {
  return (
    <>
      <div className="pt-20">
        <div>
          <h2
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            className="text-xl  md:text-3xl font-bold md:max-w-screen-lg lg:mx-auto border-b pb-3 cursor-pointer"
          >
            Posts
          </h2>

          <div
            id="default-modal"
            tabindex="-1"
            aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative  w-full max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow  px-4">
                <div class="py-3  flex items-center justify-between border-b border-[#DBDBDB] rounded-t ">
                  <h3 class="text-xl font-semibold text-gray-900 ">
                    Select Your Category
                  </h3>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="default-modal"
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

                <div class="py-4 flex gap-x-4">
                  <div className="group  w-full p-2 md:p-4 rounded cursor-pointer hover:bg-[#D85545] flex flex-col items-center gap-y-4 border border-[#DBDBDB] hover:border-transparent transition-all duration-300">
                    <i class="fa-solid fa-video w-10 h-10 rounded-full flex items-center justify-center bg-[#FAE9E7] text-[#D85545]"></i>
                    <p className="group-hover:text-white text-black font-semibold transition-all duration-300">
                      Video/Image
                    </p>
                  </div>
                  <div className="group  w-full p-2 md:p-4 rounded cursor-pointer hover:bg-[#D85545] flex flex-col items-center gap-y-4 border border-[#DBDBDB] hover:border-transparent transition-all duration-300">
                    <i class="fa-regular fa-image w-10 h-10 rounded-full flex items-center justify-center bg-[#FAE9E7] text-[#D85545]"></i>
                    <p className="group-hover:text-white text-black font-semibold transition-all duration-300">
                      Image Poll
                    </p>
                  </div>
                  <div className="group  w-full p-2 md:p-4 rounded cursor-pointer hover:bg-[#D85545] flex flex-col items-center gap-y-4 border border-[#DBDBDB] hover:border-transparent transition-all duration-300">
                    <i class="fa-solid fa-chart-simple w-10 h-10 rounded-full flex items-center justify-center bg-[#FAE9E7] text-[#D85545]"></i>
                    <p className="group-hover:text-white text-black font-semibold transition-all duration-300">
                      Poll
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <RightAdd />
    </>
  );
};

export default Home;
