import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
