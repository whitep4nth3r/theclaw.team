import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "@components/Layout";
import TeamData from "@utils/TeamData";
import styles from "@styles/Streamer.module.css";
import StreamerAvatar from "@components/StreamerAvatar";
import StreamerSchedule from "@components/StreamerSchedule";
import LatestStream from "@components/LatestStream";
import Twitch from "@components/Svg/Twitch";

function transformEmotes(emotes) {
  return emotes?.length > 0
    ? emotes.map((emote) => {
        return {
          ...emote,
          imageUrl: `https://static-cdn.jtvnw.net/emoticons/v2/${emote.id}/default/dark/3.0`,
        };
      })
    : [];
}

export default function Streamer({ streamer }) {
  const transformedEmotes = transformEmotes(streamer.emotes);

  return (
    <>
      <NextSeo title={streamer.display_name} description={streamer.description} />

      <Layout>
        <Link href="/">
          <a className={styles.streamer__backLink}>Back to all streamers</a>
        </Link>

        <div className={styles.streamer}>
          <h1 className={styles.streamer__name}>{streamer.display_name}</h1>
          <div className={styles.streamer__header}>
            <a
              href={`https://twitch.tv/${streamer.login}`}
              className={styles.streamer__headerLink}
              target="_blank">
              <div className={styles.streamer__headerAvatar}>
                <StreamerAvatar
                  imageUrl={streamer.profile_image_url}
                  name={streamer.display_name}
                  bio={streamer.description}
                  live={streamer.online}
                  isPartner={streamer.broadcaster_type === "partner"}
                />
              </div>
            </a>

            <a
              href={`https://twitch.tv/${streamer.login}`}
              className={styles.streamer__profileLink}
              target="_blank">
              <Twitch />
              View on Twitch
            </a>
          </div>

          <div className={styles.streamer__emotes}>
            {transformedEmotes.map((emote) => (
              <img src={emote.imageUrl} alt={emote.name} key={emote.name} />
            ))}
          </div>

          <div className={styles.streamer__schedule}>
            <StreamerSchedule segments={streamer.segments} name={streamer.display_name} />
          </div>

          <div className={styles.streamer__stream}>
            <LatestStream
              stream={streamer.latest_video}
              avatarUrl={streamer.profile_image_url}
              isPartner={streamer.broadcaster_type === "partner"}
              name={streamer.display_name}
              live={streamer.online}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const streamers = await TeamData.getStreamerLogins();

  const paths = streamers.map((streamer) => {
    return { params: { streamer } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const streamer = await TeamData.getStreamer(params.streamer);

  return {
    props: {
      streamer,
    },
    revalidate: 1,
  };
}
