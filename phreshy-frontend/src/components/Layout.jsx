import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      {/* Global Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/hero-bg.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      <Navbar />

      <main className="pt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
