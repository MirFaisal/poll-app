import { Link, useLocation } from "react-router-dom";
import PostCategoryMenu from "../PostCategoryMenu/PostCategoryMenu";
import PremiumSubCard from "../PremiumSubCard/PremiumSubCard";
import TheVictorIsOurs from "../TheVictorIsOurs/TheVictorIsOurs";

const MobileNavMenu = ({ setMenu, menu }) => {
  const path = useLocation();
  return (
    <div className="w-full h-full px-2 bg-white fixed top-0">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-end my-3 sm:my-5 pr-5">
            <button onClick={() => setMenu(!menu)}>
              <i className="fa-solid fa-xmark-large xs:text-xl sm:text-2xl"></i>
            </button>
          </div>
          {/* premimum card */}
          <PremiumSubCard />
          {/* The victor is ours */}
          <TheVictorIsOurs />
          {/* post category menu */}
          <PostCategoryMenu />
        </div>

        {/* log out section */}

        <div className="pb-10 px-3">
          <Link to={"/"}>
            <li
              className={`${
                path.pathname == "setting"
                  ? "py-3 bg-primary text-white pl-2 sm:text-xl flex gap-2 items-center duration-300"
                  : "py-3 pl-2 flex gap-2 items-center sm:text-xl  hover:bg-primary hover:text-white"
              }`}
            >
              <i className="fa-light fa-gear"></i>Setting
            </li>
          </Link>
          <button className="border mt-1 sm:mt-5 py-3 w-full hover:bg-primary hover:border-transparent hover:text-white duration-300">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
