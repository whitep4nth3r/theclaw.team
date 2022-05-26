import { useEffect } from "react";
import { NextSeo } from "next-seo";
import TeamData from "@utils/TeamData";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import styles from "@styles/RaidathonPage.module.css";
import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForPage } from "@utils/OpenGraph";

export default function Raidathon({ schedule }) {
  useEffect(() => import("@github/time-elements/dist/local-time-element.js"), []);

  const page = {
    title: "The Claw Team Raidathon 2022",
    description: "Check out the schedule for The Claw Team Raidathon 2022",
  };

  const imageUrl = generateImageUrlForPage({
    pageTitle: page.title,
  });

  return (
    <>
      <NextSeo
        title={page.title}
        description={page.metaDescription}
        openGraph={{
          title: page.title,
          description: page.metaDescription,
          url: "https://theclaw.team/raidathon",
          site_name: "The Claw Stream Team",
          type: "website",
          locale: "en_US",
          images: [
            {
              url: imageUrl,
              width: IMG_WIDTH,
              height: IMG_HEIGHT,
              alt: `Open Graph Image for the ${page.title} on theclaw.team`,
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
        <PageTitle title="Raidathon 9-10 June 2022" />
        <p className={styles.explainer}>
          Check out the schedule for The Claw Team Raidathon happening on 9-10 June 2022. Schedule
          times are shown in your own local timezone.
        </p>
        <div className={styles.grid}>
          {schedule.map((slot) => (
            <>
              <a
                href={`https://twitch.tv/${slot.streamer}`}
                rel="nofollow"
                className={styles.grid__linkImg}>
                <img
                  src={slot.image}
                  alt={slot.streamer}
                  loading="lazy"
                  height="100"
                  className={styles.grid__image}
                />
              </a>
              <a
                href={`https://twitch.tv/${slot.streamer}`}
                rel="nofollow"
                className={styles.grid__meta}>
                <h2 className={styles.grid__streamerName}>{slot.streamer}</h2>
                <local-time
                  datetime={slot.time}
                  weekday="short"
                  month="short"
                  day="numeric"
                  year="numeric"
                  hour="numeric"
                  minute="numeric"
                  time-zone-name="short"></local-time>
              </a>
            </>
          ))}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const streamers = await TeamData.getStreamers();

  const getProfileUrl = (login) => {
    return streamers.filter((streamer) => streamer.login === login)[0].profile_image_url;
  };

  const schedule = [
    {
      streamer: "ladyofcode",
      time: "2022-06-09T08:00:00Z",
      image: getProfileUrl("ladyofcode"),
    },
    {
      streamer: "splashley",
      time: "2022-06-09T10:00:00Z",
      image: getProfileUrl("splashley"),
    },
    {
      streamer: "toefrog",
      time: "2022-06-09T13:00:00Z",
      image: getProfileUrl("toefrog"),
    },
    {
      streamer: "finitesingularity",
      time: "2022-06-09T16:00:00Z",
      image: getProfileUrl("finitesingularity"),
    },
    {
      streamer: "matty_twoshoes",
      time: "2022-06-09T19:00:00Z",
      image: getProfileUrl("matty_twoshoes"),
    },
    {
      streamer: "metalandcoffee_",
      time: "2022-06-09T22:00:00Z",
      image: getProfileUrl("metalandcoffee_"),
    },
    {
      streamer: "ryan_the_rhg",
      time: "2022-06-10T01:00:00Z",
      image: getProfileUrl("ryan_the_rhg"),
    },
    {
      streamer: "haliphax",
      time: "2022-06-10T04:00:00Z",
      image: getProfileUrl("haliphax"),
    },
    {
      streamer: "whitep4nth3r",
      time: "2022-06-10T07:00:00Z",
      image: getProfileUrl("whitep4nth3r"),
    },
    {
      streamer: "splashley",
      time: "2022-06-10T10:00:00Z",
      image: getProfileUrl("splashley"),
    },
    {
      streamer: "ukmadlz",
      time: "2022-06-10T13:00:00Z",
      image: getProfileUrl("ukmadlz"),
    },
    {
      streamer: "sociablesteve",
      time: "2022-06-10T16:00:00Z",
      image: getProfileUrl("sociablesteve"),
    },
    {
      streamer: "tdrayson",
      time: "2022-06-10T19:00:00Z",
      image: getProfileUrl("tdrayson"),
    },
  ];

  return {
    props: {
      schedule,
    },
  };
}
