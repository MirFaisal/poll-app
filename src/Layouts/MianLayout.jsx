import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MianLayout = () => {
  return (
    <>
          <Navbar />
          <Outlet/>
    </>
  );
};

export default MianLayout;
