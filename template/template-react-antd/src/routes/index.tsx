import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/page1" />,
      },
      {
        path: "/page1",
        element: <div>Page1</div>,
      },
      {
        path: "/page2",
        element: <div>Page2</div>,
      },
    ],
  },
]);

export { router };
