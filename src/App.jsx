import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import SignUpPage from "./pages/SignUpPage";
import SignUpSuccessPage from "./pages/SignUpSucessPage";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/signup" replace />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/signup-success",
        element: <SignUpSuccessPage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
