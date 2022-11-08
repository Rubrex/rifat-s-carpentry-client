import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReviews from "../components/MyReviews/MyReviews";
import NotFound from "../components/NotFound/NotFound";
import Register from "../components/Register/Register";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Services from "../components/Services/Services";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () =>
          fetch("https://rifat-carpenter-server.vercel.app/services?service=3"),
      },
      {
        path: "/services",
        element: <Services />,
        loader: async () =>
          fetch("https://rifat-carpenter-server.vercel.app/services?service=*"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: async ({ params }) =>
          fetch(
            `https://rifat-carpenter-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
