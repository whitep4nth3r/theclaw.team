import Styles from "@styles/Layout.module.css";
import Header from "@components/Header";
import MothBanner from "@components/Svg/MothBanner";

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
      <div className={Styles.layout__container}>
        <Header />
        <div className={Styles.layout__main}>{children}</div>
      </div>
    </div>
  );
}
