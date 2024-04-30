<<<<<<< HEAD
import Login from "./login/Login";

const App = () => {
  return (
    <div>
      <h1 className=""><Login/></h1>
    </div>
=======
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
>>>>>>> ea45c0e1508c97ab429b1c7e813de36d4d78c447
  );
};

export default App;
