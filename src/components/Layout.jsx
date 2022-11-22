import { Outlet } from "react-router-dom";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
