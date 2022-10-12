import { getSession } from "next-auth/react";
import OverlayStyles from "@styles/Overlays.module.css";
import styles from "@styles/Raidathon.module.css";
import Moth from "@components/Svg/Moth";

export default function Raidathon() {
  return (
    <div className={OverlayStyles.overlay__container}>
      <div className={styles.moth}>
        <Moth />
      </div>

      <h1 id="text" className={styles.text}>
        RAIDATHON
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
