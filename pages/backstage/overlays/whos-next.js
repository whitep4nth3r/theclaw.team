import { useSession, getSession, signIn } from "next-auth/client";
import styles from "@styles/Overlays.module.css";
import { motion } from "framer-motion";
import TeamData from "@utils/TeamData";
import StreamerProfileImage from "@components/StreamerProfileImage";
import {getTimeRemaining} from "@utils/Date";
import Countdown from "react-countdown";

export default function OverlayWhosNext({nextUp, avatar, isPartner}) {
  const [session] = useSession();

  const {broadcast_name, start_time, title} = nextUp

  return (
    <div className={styles.overlay__container}>
      <div className={styles.overlay__whosNext__topLeft}>
        <motion.div
          className={styles.overlay__whosNext__container}
          style={{ opacity: "0" }}
          animate={{
            opacity: ["0", "1", "1", "0"],
          }}
          transition={{
            duration: 20,
            ease: "easeIn",
            times: [0, 0.05, 0.95, 1],
            repeat: Infinity,
            repeatDelay: 30,
          }}>
          <motion.div
            className={styles.overlay__whosNext__upNext}
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
            }}
          >
            <p>Up Next</p>
          </motion.div>
          <div
            className={styles.overlay__whosNext__avatar}
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
            }}>
              <StreamerProfileImage imageUrl={avatar} isPartner={isPartner} />
          </div>
          <div
            className={styles.overlay__whosNext__details}
            animate={{
              y: ["-200%", "0%", "0%", "-200%"],
            }}
            transition={{
              duration: 10,
              ease: "easeIn",
              times: [0, 0.05, 0.95, 1],
              repeat: Infinity,
            }}
            >

            <p className={styles.overlay__whosNext__details__streamer}>
              {broadcast_name} in&nbsp;
              <Countdown date={start_time} />
            </p>
            <p className={styles.overlay__whosNext__details__title}>{title}</p>
            </div>
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

  var nextUpArr = await TeamData.getWhosNext();

  // Check through the next up data and exlude any where the start_time passes
  // Assign to the next up
   nextUpArr = nextUpArr.filter(streamer => new Date(streamer.start_time) >= new Date());

  const nextUp = nextUpArr[0] ?? null;

  const streamer = await TeamData.getStreamer(nextUp.broadcast_name.toLowerCase())

  return {
    props: {
      nextUp,
      avatar: streamer.profile_image_url,
      isPartner: streamer.broadcaster_type && streamer.broadcaster_type == "partner",
      session: await getSession(context),
    },
  };
}
