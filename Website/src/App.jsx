import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Uploader from "./components/Uploader";
import Register from "./components/Register";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Signin from "./components/Signin";
import FAQs from "./components/FAQs";
import ChatApp from "./components/ChatApp";
import History from "./components/History";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "upload",
        element: <Uploader />,
      },
      {
        path: "FAQ",
        element: <FAQs />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "chatbot",
        element: <ChatApp />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
