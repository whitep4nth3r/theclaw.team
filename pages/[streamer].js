import Head from "next/head";
import Link from "next/link";
import Footer from "@components/Footer";
import Layout from "@components/Layout";
import TeamData from "@utils/TeamData";

import styles from "@styles/Streamer.module.css";
import StreamerAvatar from "@components/StreamerAvatar";
import StreamerSchedule from "@components/StreamerSchedule";

export default function Streamer({ streamer }) {
  // latest_video.thumbnail_url
  // latest_video.url
  // latest_video.title
  // emotes: array
  console.log(streamer);
  return (
    <>
      <Head>
        <title>{streamer.display_name} | The Claw Stream Team</title>
        <meta name="description" content={streamer.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Link href="/">
          <a className={styles.streamer__backLink}>Back to all streamers</a>
        </Link>

        <main className={styles.streamer}>
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
            <div className={styles.streamer__headerStream}>
              <a
                href={`https://twitch.tv/${streamer.login}`}
                className={styles.streamer__headerLink}
                target="_blank">
                <img
                  src={streamer.latest_video.thumbnail_url
                    .replace("%{width}", "1920")
                    .replace("%{height}", "1080")}
                  className={styles.streamer__headerStreamImg}
                  alt={`${streamer.display_name} latest stream thumbnail`}
                />
              </a>
            </div>
          </div>

          <a href={`https://twitch.tv/${streamer.login}`} target="_blank">
            Twitch profile link
          </a>

          <StreamerSchedule segments={streamer.segments} name={streamer.display_name} />
        </main>

        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const streamers = await TeamData.getStreamers();

  const paths = streamers.map((streamer) => {
    return { params: { streamer: streamer.login } };
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
