import { Outlet } from "react-router-dom";
import HeaderNav from "../Components/HeaderNav/HeaderNav";
import Navbar from "../Components/Navbar/Navbar";

const MianLayout = () => {
  return (
    <>
      <HeaderNav />
      <Navbar />
      <Outlet />
    </>
  );
};

export default MianLayout;
