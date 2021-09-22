import Head from "next/head";
import Link from "next/link";
import Footer from "@components/Footer";
import Layout from "@components/Layout";
import TeamData from "@utils/TeamData";
import {
  formatTwitchScheduleTimeSlot,
  formatDateForTwitchDisplay,
  formatDateForDateTime,
} from "@utils/Date";
import styles from "@styles/Streamer.module.css";
import StreamerAvatar from "@components/StreamerAvatar";

export default function Streamer({ streamer }) {
  // online: bool
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

          {/* <p>View count: {streamer.view_count}</p> */}

          {/* <h3>Schedule</h3>

          {streamer.segments?.length > 0 &&
            streamer.segments.map((segment) => (
              <div key={segment.id}>
                <p>{segment.title}</p>
                {segment.category !== null && <p>{segment.category.name}</p>}

                <time dateTime={formatDateForDateTime(segment.start_time)}>
                  {formatDateForTwitchDisplay(segment.start_time)}
                </time>
                <p>{formatTwitchScheduleTimeSlot(segment.start_time, segment.end_time)}</p>
              </div>
            ))} */}
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
