import {
  createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../Shop/SingleBook";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Dashboard/DashboardLayout";
import UploadBook from "../Dashboard/UploadBook";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Logout from "../components/Logout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/Blog',
        element: <Blog />
      },
      {
        path: '/book/:id',
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      },

    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      }
    ]
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },  {
    path: "/logout",
    element: <Logout />
  }
]);

export default router