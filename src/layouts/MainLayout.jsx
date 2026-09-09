import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../hooks/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
        </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
