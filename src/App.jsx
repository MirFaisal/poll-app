import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MianLayout from "./Layouts/MianLayout";
import Home from "./Pages/Home/Home";
import LoginRegisterWrapper from "./Pages/Login&Register/LoginRegisterWrapper";
import Notification from "./Pages/Notification/Notification";
import Setting from "./Pages/Setting/Setting";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile";

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
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
