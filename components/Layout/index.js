import styles from "@styles/Layout.module.css";
import Header from "@components/Header";
import MothBanner from "@components/Svg/MothBanner";
import Footer from "@components/Footer";
import JoinDiscord from "@components/JoinDiscord";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__brandBar}>
        <div className={styles.layout__brandBarInner}>
          <span className={styles.layout__brandBarMoth}>
            <MothBanner />
          </span>
          <Header />
        </div>
      </div>
      <div className={styles.layout__wrapper}>
        <main className={styles.layout__main}>
          <JoinDiscord />
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
