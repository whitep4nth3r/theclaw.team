import Styles from "@styles/Layout.module.css";
import Header from "@components/Header";
import MothBanner from "@components/Svg/MothBanner";
import Footer from "@components/Footer";

export default function Layout({ children }) {
  return (
    <div className={Styles.layout}>
      <div className={Styles.layout__brandBar}>
        <div className={Styles.layout__brandBarInner}>
          <span className={Styles.layout__brandBarMoth}>
            <MothBanner />
          </span>
        </div>
      </div>
      <div className={Styles.layout__wrapper}>
        <Header />
        <main className={Styles.layout__main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
