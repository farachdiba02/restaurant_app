import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../components/Login";
import Home from "../views/Home";
import Category from "../views/Category";
import FormCuisine from "../components/FormCuisine";
import FormCategory from "../components/FormCategory";
import EditCuisine from "../components/EditCuisine";
import AddUser from "../components/AddUser";
import FormImg from "../components/FormImg";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        return redirect("/home");
      }
      return null;
    },
  },
  {
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Category />,
      },
      {
        path: "/add-cuisines",
        element: <FormCuisine />,
      },
      {
        path: "/add-category",
        element: <FormCategory />,
      },
      {
        path: "/edit-cuisine/:id",
        element: <EditCuisine />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },

      {
        path: "/form-img/:id",
        element: <FormImg />,
      },
    ],
  },
]);

export default router;
