import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "@components/Layout";
import TeamData from "@utils/TeamData";
import styles from "@styles/Streamer.module.css";
import StreamerAvatar from "@components/StreamerAvatar";
import StreamerSchedule from "@components/StreamerSchedule";
import LatestStream from "@components/LatestStream";
import Twitch from "@components/Svg/Twitch";
import { transformEmotes } from "@utils/Tools";
import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForStreamer } from "@utils/OpenGraph";
import { getRandomEntry } from "@whitep4nth3r/get-random-entry";

export default function Streamer({ streamer, hasBanner }) {
  const transformedEmotes = transformEmotes(streamer.emotes);
  const plainEmoteUrlArray = transformedEmotes.map((emote) => emote.imageUrl);

  const imageUrl = generateImageUrlForStreamer({
    streamerName: streamer.display_name,
    avatarUrl: streamer.profile_image_url,
    emoteUrl: plainEmoteUrlArray.length ? getRandomEntry(plainEmoteUrlArray) : null,
  });

  const ogUrl = `https://theclaw.team/${streamer.login}`;
  const title = `${streamer.display_name} on The Claw stream team`;
  const description = streamer.description;

  return (
    <>
      <NextSeo
        title={streamer.display_name}
        description={streamer.description}
        openGraph={{
          title,
          description,
          url: ogUrl,
          site_name: "The Claw Stream Team",
          type: "website",
          locale: "en_US",
          images: [
            {
              url: imageUrl,
              width: IMG_WIDTH,
              height: IMG_HEIGHT,
              alt: `Profile card for ${streamer.display_name} on The Claw stream team`,
            },
          ],
        }}
        twitter={{
          handle: "@whitep4nth3r",
          site: "https://whitep4nth3r.com",
          cardType: "summary_large_image",
        }}
      />

      <Layout>
        <Link href="/">
          <a className={styles.streamer__backLink}>Back to all streamers</a>
        </Link>

        <div className={styles.streamer}>
          {!hasBanner && <h1 className={styles.streamer__name}>{streamer.display_name}</h1>}
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
                  hasBanner={false}
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
