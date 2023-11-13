import PostCard from "../../Components/PostCard/PostCard";
import RightAdd from "../../Components/RightAdd/RightAdd";

const Home = () => {
  return (
    <>
      <div className="pt-20">
        <div>
          <h2 className="text-xl  md:text-3xl font-bold md:max-w-screen-lg lg:mx-auto border-b pb-3">
            Posts
          </h2>
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
