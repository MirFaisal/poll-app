import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MianLayout from "./Layouts/MianLayout";
import Home from "./Pages/Home/Home";
import LoginRegisterWrapper from "./Pages/Login&Register/LoginRegisterWrapper";
import Notification from "./Pages/Notification/Notification";
import Setting from "./Pages/Setting/Setting";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile";
import VideoPost from "./Pages/VideoPost/VideoPost";
import ImagePoll from "./Pages/ImagePoll/ImagePoll";
import TextPoll from "./Pages/TextPoll/TextPoll";
import "flowbite";

function App() {
  const route = createBrowserRouter([
    {
      path: "login",
      element: <LoginRegisterWrapper />,
    },
    {
      path: "/",
      element: <MianLayout></MianLayout>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/notifications",
      element: <MianLayout></MianLayout>,
      children: [
        {
          path: "/notifications",
          element: <Notification />,
        },
      ],
    },
    {
      path: "/setting",
      element: <MianLayout></MianLayout>,
      children: [
        {
          path: "/setting",
          element: <Setting />,
        },
      ],
    },
    {
      path: "/profile",
      element: <MianLayout></MianLayout>,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/edit",
      element: <MianLayout></MianLayout>,
      children: [
        {
          path: "/edit",
          element: <EditProfile />,
        },
      ],
    },
    {
      path: "/uploadcontent",
      element: <MianLayout></MianLayout>,
      children: [
        {
          path: "/uploadcontent",
          element: <VideoPost />,
        },
      ],
    },
    {
      path: "/imagepoll",
      element: <MianLayout></MianLayout>,
      children: [
        {
          path: "/imagepoll",
          element: <ImagePoll />,
        },
      ],
    },
    {
      path: "/textpoll",
      element: <MianLayout></MianLayout>,
      children: [
        {
          path: "/textpoll",
          element: <TextPoll />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
