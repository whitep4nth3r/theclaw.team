import { signIn } from "next-auth/client";
import styles from "@styles/Backstage.module.css";
import Twitch from "@components/Svg/Twitch";

export default function PleaseSignIn() {
  return (
    <>
      <h2 className={styles.backstage__textCenter}>Please log in via Twitch — for team members only.</h2>
      <a
        className={styles.backstage__signIn}
        href="/api/auth/signin"
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}>
        <Twitch />
        <span>Log in with Twitch</span>
      </a>
    </>
  );
}
