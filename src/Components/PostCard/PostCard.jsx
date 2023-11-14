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
