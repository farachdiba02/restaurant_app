import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import DetailPage from "../views/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
]);

export default router;
