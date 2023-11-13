import PostCard from "../../Components/PostCard/PostCard";
import RightAdd from "../../Components/RightAdd/RightAdd";

const Home = () => {
  return (
    <>
      <div className="pt-28">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <RightAdd />
    </>
  );
};

export default Home;
