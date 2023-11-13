import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const RightAdd = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-[267px] py-6 absolute top-20 right-16 md:block hidden">
        {/* ======================= */}

        <div className="shadow-md bg-white rounded-lg p-5 text-center mt-8">
          <h3 className="font-semibold text-xl text-black-black-13">
            Become a Premium subscriber
          </h3>
          <p className="text-gray-800 text-base font-normal leading-6 mt-4 mb-5">
            You have 3 trial credits at your disposal.
          </p>
          <button className="text-black-black-13 text-base font-medium leading-normal py-[10px] bg-[#5CF8C3] w-full rounded">
            Upgrade
          </button>
        </div>

        {/* ======================= */}

        <div className="vector mt-8 border-b border-[#DBDBDB] pb-5">
          <p className="font-semibold text-lg mb-4">The victor is ours</p>
          <div className="flex flex-wrap gap-6">
            <div className="vectorImage w-10 h-10 bg-red-400 rounded-full"></div>
            <div className="vectorImage w-10 h-10 bg-red-400 rounded-full"></div>
            <div className="vectorImage w-10 h-10 bg-red-400 rounded-full"></div>
            <div className="vectorImage w-10 h-10 bg-red-400 rounded-full"></div>
            <div className="vectorImage w-10 h-10 bg-red-400 rounded-full"></div>
            <div className="vectorImage w-10 h-10 bg-red-400 rounded-full"></div>
            <div className="vectorImage w-10 h-10 bg-red-400 rounded-full"></div>
            <div className="vectorImage w-10 h-10 bg-red-400 rounded-full"></div>
          </div>
        </div>

        {/* ======================= */}

        <div className="ourCategory mt-8 border-b border-[#DBDBDB] pb-5">
          <p className="font-semibold text-lg mb-4">Our Category</p>
          <div className="">
            <ul className="flex flex-col gap-4">
              <li>
                <Link className="py-2 px-3 rounded font-semibold text-base bg-transparent  hover:bg-[#45F7BB] hover:border-transparent border border-[#C4C4C4] block transition-all duration-300">
                  Sports
                </Link>
              </li>
              <li>
                <Link className="py-2 px-3 rounded font-semibold text-base bg-transparent  hover:bg-[#45F7BB] hover:border-transparent border border-[#C4C4C4] block transition-all duration-300">
                  Sports
                </Link>
              </li>
              <li>
                <Link className="py-2 px-3 rounded font-semibold text-base bg-transparent  hover:bg-[#45F7BB] hover:border-transparent border border-[#C4C4C4] block transition-all duration-300">
                  Sports
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ======================= */}

        <div className="mt-7">
          <img className="w-full" src="./add/add.jpg" alt="add.jpg" />
        </div>
        <div className="mt-7">
          <img className="w-full" src="./add/add.jpg" alt="add.jpg" />
        </div>
      </div>
    </>
  );
};

export default RightAdd;
