import Styles from "@styles/Footer.module.css";

export default function Footer() {
  const date = new Date();
  return <footer className={Styles.footer}>&copy; The Claw {date.getFullYear()}</footer>;
}
