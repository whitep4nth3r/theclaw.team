import Styles from "@styles/Footer.module.css";
import LoggedInUser from "@components/LoggedInUser";

export default function Footer() {
  const date = new Date();
  return (
    <footer className={Styles.footer}>
      <LoggedInUser />
      <p className={Styles.footer__copyright}>&copy; The Claw {date.getFullYear()}</p>
    </footer>
  );
}
