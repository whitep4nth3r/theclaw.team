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
import Styles from "@styles/Streamer.module.css";

export default function Streamer({ streamer }) {
  return (
    <>
      <Head>
        <title>{streamer.display_name} | The Claw Stream Team</title>
        <meta name="description" content={streamer.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout noGutter={true}>
        <Link href="/">
          <a className={Styles.streamer__backLink}>Back to all streamers</a>
        </Link>

        <main className={Styles.streamer}>
          <div className={Styles.streamer__banner}>
            <img
              src={streamer.profile_image_url}
              alt={`${streamer.display_name} Twitch profile picture`}
            />
            <div>
              <h1>{streamer.display_name}</h1>
              <p>{streamer.description}</p>
            </div>
          </div>

          {/* <p>{streamer.broadcaster_type}</p> */}
          {/* <a href={`https://twitch.tv/${streamer.login}`} target="_blank">
            Twitch profile link
          </a> */}

          {/* <p>View count: {streamer.view_count}</p> */}

          {/* <h3>Schedule</h3> */}

          {/* {streamer.segments?.length > 0 &&
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
