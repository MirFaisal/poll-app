import PollOption from "../PollOption/PollOpotion";
import PostReacts from "../PostReacts/PostReacts";

const PostCard = () => {
  const start = ["A", "B", "C", "D"];
  return (
    <div className="mt-5 mx-1 p-4 rounded border md:max-w-screen-lg lg:ml-[100px]">
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
        <img src="./post/post.jpg" alt="post" />
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
        <PollOption></PollOption>
        <PollOption></PollOption>
        <PollOption></PollOption>
        <PollOption></PollOption>
      </div>
      {/* post status */}
      <div className="flex justify-between mt-16 px-2">
        {/* like button */}
        {/* <button className="like flex items-center gap-2 text-lg">
          <i className="fa-light fa-heart"></i>
          
          7k
        </button> */}
        <PostReacts />
        <div className="flex gap-4 text-gray-600">
          <div>570 comments</div>
          <div>570 Share</div>
          <div className="flex items-center gap-2">
            <i className="fa-light fa-eye"></i>
            4k
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
