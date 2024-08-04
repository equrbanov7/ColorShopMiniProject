import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

const ClinetLayout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
};

export default ClinetLayout;