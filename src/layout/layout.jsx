import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const layout = () => {
  return (
    <div className="">
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default layout;
