import styles from "@styles/Footer.module.css";
import LoggedInUser from "@components/LoggedInUser";

export default function Footer() {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <LoggedInUser />
      <p className={styles.footer__copyright}>&copy; The Claw {date.getFullYear()}</p>
    </footer>
  );
}
