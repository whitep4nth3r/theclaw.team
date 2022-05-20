import { useEffect, useState } from "react";
import { useSession, getSession, signIn } from "next-auth/client";
import OverlayStyles from "@styles/Overlays.module.css";
import styles from "@styles/Raidathon.module.css";
import classNames from "classnames/bind";
import Moth from "@components/Svg/Moth";
// import FlowerRed from "@components/Svg/FlowerRed";
// import FlowerBlue from "@components/Svg/FlowerBlue";
// import { motion } from "framer-motion";

let cx = classNames.bind(styles);

export default function Raidathon() {
  const [session] = useSession();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setInterval(() => {
      const newValue = !isAnimating;
      setIsAnimating(newValue);
    }, 60000);

    return () => {};
  }, [isAnimating]);

  return (
    <div className={OverlayStyles.overlay__container}>
      <span className={styles.joinDiscord__checkOut}>
        Check out
        <span role="img" aria-label="hand pointing down">
          👇
        </span>
      </span>
      {/* <span className={styles.flowerBlue}>
        <FlowerBlue />
      </span>
      <span className={styles.flowerRed}>
        <FlowerRed />
      </span> */}

      <div className={styles.moth}>
        <Moth />
      </div>

      <h1
        id="text"
        className={cx({
          text: true,
          animate: isAnimating,
        })}>
        <span className={styles.blockSeparator}>
          {"THE CLAW TEAM".split("").map((char, index) => (
            <span key={`text-${index}`} className={styles.letter} style={{ "--index": index }}>
              {char}
            </span>
          ))}
        </span>
        <span className={styles.blockSeparator}>
          {"RAIDATHON".split("").map((char, index) => (
            <span key={`text2-${index}`} className={styles.letter} style={{ "--index": index + 2 }}>
              {char}
            </span>
          ))}
        </span>
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
