import Head from "next/head";
import Link from "next/link";
import Footer from "@components/Footer";
import Layout from "@components/Layout";
import TeamData from "@utils/TeamData";
import PageTitle from "@components/PageTitle";

export default function Streamer({ streamer }) {
  return (
    <>
      <Head>
        <title>{streamer.display_name} | The Claw</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Link href="/">
          <a>Back to all streamers</a>
        </Link>
        <main>
          <PageTitle title={streamer.display_name} />

          <p>{streamer.description}</p>
          <p>{streamer.broadcaster_type}</p>

          <img
            src={streamer.profile_image_url}
            alt={`${streamer.display_name} Twitch profile picture`}
          />

          <a href={`https://twitch.tv/${streamer.login}`} target="_blank">
            Twitch profile link
          </a>

          <p>View count: {streamer.view_count}</p>

          <h3>Schedule</h3>

          {streamer.segments?.length > 0 &&
            streamer.segments.map((segment) => (
              <div key={segment.id}>
                <p>{segment.title}</p>
                {segment.category !== null && <p>{segment.category.name}</p>}
                <p>{segment.start_time}</p>
                <p>{segment.end_time}</p>
              </div>
            ))}
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
