import { motion } from "framer-motion";
import { useState } from "react";
import Angry from "../../../public/assets/angry.svg";
import Laughing from "../../../public/assets/laughing.svg";
import Like from "../../../public/assets/like.svg";
import Love from "../../../public/assets/love.svg";
import Sad from "../../../public/assets/sad.svg";
import Soaked from "../../../public/assets/soaked.svg";

const PostReacts = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [selectedBtn, setSeletedBtn] = useState("./assets/heart.svg");

  const handelReact = (e) => {
    const btn = e.target.getAttribute("src");
    console.log(btn);
    setSeletedBtn(btn);
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "beforeChildren",
      },
      scale: 0.6,
    },
  };

  return (
    <motion.div
      className="parentDiv relative z-10"
      onClick={() => btnClicked === true && setBtnClicked(false)}
    >
      <motion.div
        className="w-[300px] absolute -top-20 -left-4 flex justify-around bg-white shadow p-3 rounded-full mb-5"
        variants={list}
        animate={btnClicked ? "visible" : "hidden"}
      >
        <motion.img
          whileHover={{ scale: 1.3 }}
          src={Like}
          alt="Like"
          width="40"
          onClick={(e) => {
            handelReact(e);
            setBtnClicked(false);
          }}
        />
        <motion.img
          whileHover={{ scale: 1.3 }}
          src={Love}
          alt="Love"
          width="40"
          onClick={(e) => {
            handelReact(e);
            setBtnClicked(false);
          }}
        />
        <motion.img
          whileHover={{ scale: 1.3 }}
          src={Angry}
          alt="Angry"
          width="40"
          onClick={(e) => {
            handelReact(e);
            setBtnClicked(false);
          }}
        />
        <motion.img
          whileHover={{ scale: 1.3 }}
          src={Sad}
          alt="Sad"
          width="40"
          onClick={(e) => {
            handelReact(e);
            setBtnClicked(false);
          }}
        />
        <motion.img
          whileHover={{ scale: 1.3 }}
          src={Soaked}
          alt="Soaked"
          width="40"
          onClick={(e) => {
            handelReact(e);
            setBtnClicked(false);
          }}
        />
        <motion.img
          whileHover={{ scale: 1.3 }}
          src={Laughing}
          alt="Laughing"
          width="40"
          onClick={(e) => {
            handelReact(e);
            setBtnClicked(false);
          }}
        />
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="flex items-center"
        onClick={() => setBtnClicked(true)}
      >
        <motion.img src={selectedBtn} className="w-6" /> &nbsp; Like
      </motion.button>
    </motion.div>
  );
};

export default PostReacts;
