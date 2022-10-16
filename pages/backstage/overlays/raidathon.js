import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import OverlayStyles from "@styles/Overlays.module.css";
import styles from "@styles/Raidathon.module.css";
import Moth from "@components/Svg/Moth";
import Countdown from "react-countdown";

export default function Raidathon() {
  const raidathonEnd = "2022-10-21T23:00:00Z";
  const date = new Date(raidathonEnd);
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    setShowCountdown(true);
    return () => {};
  }, [setShowCountdown]);

  return (
    <div className={OverlayStyles.overlay__container}>
      <div className={styles.moth}>
        <Moth />
      </div>

      <h1 id="text" className={styles.text}>
        RAIDATHON <br />
        {showCountdown && (
          <span className={styles.countdown}>
            <Countdown date={date} />
          </span>
        )}
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
