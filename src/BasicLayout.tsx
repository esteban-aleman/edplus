import { Footer, Header } from "components";
import { Outlet } from "react-router-dom";
import ScrollToTop from "utils/ScrollToTop";

const BasicLayout = (): JSX.Element => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BasicLayout;
