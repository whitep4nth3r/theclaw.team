import { useSession, getSession, signIn } from "next-auth/react";
import MothAndBanner from "@components/OverlayElements/MothAndBanner";
import styles from "@styles/Overlays.module.css";
import { motion } from "framer-motion";

export default function OverlayOne() {
  const { data: session } = useSession();

  return (
    <div className={styles.overlay__container}>
      <div className={styles.overlay__one__topLeftReverse}>
        <motion.div
          className={styles.overlay__one__url}
          style={{ y: "-200%" }}
          animate={{
            y: ["-200%", "0%", "0%", "-200%"],
          }}
          transition={{
            duration: 5,
            ease: "easeIn",
            times: [0, 0.05, 0.95, 1],
            repeatDelay: 30,
            repeat: Infinity,
          }}>
          theclaw.team
        </motion.div>
        <motion.div
          className={styles.overlay__one__moth}
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}>
          <MothAndBanner />
        </motion.div>
      </div>
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
