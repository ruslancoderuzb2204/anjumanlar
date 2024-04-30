import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Admin from "./pages/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "admin",
    element: <Admin/>,
  },
]);
const App = () => {
  return createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
};

export default App;
