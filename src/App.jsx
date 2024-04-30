
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navbar/>
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
