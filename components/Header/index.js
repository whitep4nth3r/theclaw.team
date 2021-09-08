import MothBanner from "@components/Header/svg/MothBanner";
import Styles from "@styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={Styles.header__logoContainer}>
        <MothBanner />
      </div>
    </header>
  );
}
