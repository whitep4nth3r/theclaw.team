import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@styles/Header.module.css";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__navList}>
          <li className={styles.header__navListItem}>
            <Link href="/">
              <a
                className={cx({
                  header__navListItemLink: true,
                  header__navListItemLinkActive: pathname === "/",
                })}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/join-the-team">
              <a
                className={cx({
                  header__navListItemLink: true,
                  header__navListItemLinkActive: pathname === "/join-the-team",
                })}>
                Join
              </a>
            </Link>
          </li>
          <li>
            <Link href="/code-of-conduct">
              <a
                className={cx({
                  header__navListItemLink: true,
                  header__navListItemLinkActive: pathname === "/code-of-conduct",
                })}>
                CoC
              </a>
            </Link>
          </li>
          <li>
            <Link href="/backstage">
              <a
                className={cx({
                  header__navListItemLink: true,
                  header__navListItemLinkActive: pathname === "/backstage",
                })}>
                Backstage
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
