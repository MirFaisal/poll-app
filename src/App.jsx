import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MianLayout from "./Layouts/MianLayout";
import Home from "./Pages/Home/Home";
import LoginRegisterWrapper from "./Pages/Login&Register/LoginRegisterWrapper";

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
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
