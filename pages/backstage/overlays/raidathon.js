import { useEffect, useState } from "react";
import { useSession, getSession, signIn } from "next-auth/client";
import OverlayStyles from "@styles/Overlays.module.css";
import styles from "@styles/Raidathon.module.css";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

export default function Raidathon() {
  const [session] = useSession();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setInterval(() => {
      const newValue = !isAnimating;
      setIsAnimating(newValue);
    }, 10000);

    return () => {};
  }, [isAnimating]);

  return (
    <div className={OverlayStyles.overlay__container}>
      <h1
        id="text"
        className={cx({
          text: true,
          animate: isAnimating,
        })}>
        {"RAIDATHON".split("").map((char, index) => (
          <span key={`text-${index}`} className={styles.letter} style={{ "--index": index }}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/backstage",
      },
    };
  }

  return {
    props: {
      session: await getSession(context),
    },
  };
}
