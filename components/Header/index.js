import Link from "next/link";
import Styles from "@styles/Header.module.css";

export default function Header() {
  return (
    <header className={Styles.header}>
      <nav className={Styles.header__nav}>
        <ul className={Styles.header__navList}>
          <li className={Styles.header__navListItem}>
            <Link href="/">
              <a className={Styles.header__navListItemLink}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/join-the-team">
              <a className={Styles.header__navListItemLink}>Join</a>
            </Link>
          </li>
          <li>
            <Link href="/code-of-conduct">
              <a className={Styles.header__navListItemLink}>COC</a>
            </Link>
          </li>
          <li>
            <Link href="/backstage">
              <a className={Styles.header__navListItemLink}>Backstage</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
