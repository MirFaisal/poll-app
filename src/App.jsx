import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginRegisterWrapper from "./Components/Login&Register/LoginRegisterWrapper";
import MianLayout from "./Layouts/MianLayout";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <MianLayout></MianLayout>,
      children: [],
    },
    {
      path: "login",
      element: <LoginRegisterWrapper />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
