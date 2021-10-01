import { useSession, getSession, signOut, signIn } from "next-auth/client";

import styles from "@styles/LoggedInUser.module.css";

export default function LoggedInUser() {
  const [session] = useSession();

  const displayName = session?.user.name || "Welcome";
  const image = session?.user.image || "/assets/moth.png";
  const imageAltText = session ? `Profile image for ${session.user.name}` : "Panther Moth";
  const ctaText = session ? "Sign out" : "Team member sign in";
  const callback = session ? signOut : signIn;
  const onwardHref = session ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className={styles.loggedInUser}>
      <img
        src={image}
        alt={imageAltText}
        height="70"
        width="70"
        className={styles.loggedInUser__image}
      />
      <p className={styles.loggedInUser__name}>{displayName}</p>

      <a
        className={styles.loggedInUser__cta}
        href={onwardHref}
        onClick={(e) => {
          e.preventDefault();
          callback();
        }}>
        {ctaText}
      </a>
    </div>
  );
}
