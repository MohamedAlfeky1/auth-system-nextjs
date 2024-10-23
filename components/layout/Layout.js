import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
