import Styles from "@styles/Layout.module.css";
import MothBanner from "@components/Svg/MothBanner";

export default function Layout({ children }) {
  return (
    <div className={Styles.layout}>
      <div className={Styles.layout__sidebar}>
        <div className={Styles.layout__sidebarInner}>
          <MothBanner />
        </div>
      </div>
      <div className={Styles.layout__main}>{children}</div>
    </div>
  );
}
