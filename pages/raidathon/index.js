import { useEffect } from "react";
import { NextSeo } from "next-seo";
import TeamData from "@utils/TeamData";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import styles from "@styles/RaidathonPage.module.css";
import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForPage } from "@utils/OpenGraph";
import StreamerAvatar from "@components/StreamerAvatar";

export default function Raidathon({ schedule }) {
  useEffect(() => import("@github/time-elements/dist/local-time-element.js"), []);

  const raidathonDate = "20-21 Oct 2022";

  const page = {
    title: "The Claw Team Raidathon 2022 — 2nd Edition",
    description: `Check out the schedule for The Claw Team Raidathon happening on ${raidathonDate}`,
  };

  const imageUrl = generateImageUrlForPage({
    pageTitle: page.title,
  });

  return (
    <>
      <NextSeo
        title={page.title}
        description={page.description}
        openGraph={{
          title: page.title,
          description: page.description,
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
        <PageTitle title={`Raidathon ${raidathonDate}`} />
        <p className={styles.explainer}>
          Check out the schedule for The Claw Team Raidathon happening on {raidathonDate}. Schedule
          times are shown in your own local timezone.
        </p>
        <div className={styles.grid}>
          {schedule.map((slot) => (
            <>
              <a
                href={`https://twitch.tv/${slot.streamer}`}
                rel="nofollow"
                className={styles.grid__linkImg}>
                <StreamerAvatar
                  imageUrl={slot.data.profile_image_url}
                  name={slot.data.display_name}
                  bio={slot.data.description}
                  live={slot.data.online}
                  isPartner={slot.data.broadcaster_type === "partner"}
                  hasBanner={false}
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

export async function getServerSideProps() {
  const streamers = await TeamData.getStreamers();

  const getStreamerData = (login) => {
    return streamers.filter((streamer) => streamer.login === login)[0];
  };

  const schedule = [
    {
      streamer: "tdrayson",
      time: "2022-10-20T17:00:00Z",
      data: getStreamerData("tdrayson"),
    },
    {
      streamer: "samkitkat",
      time: "2022-10-20T20:00:00Z",
      data: getStreamerData("samkitkat"),
    },
    {
      streamer: "metalandcoffee_",
      time: "2022-10-20T23:00:00Z",
      data: getStreamerData("metalandcoffee_"),
    },
    {
      streamer: "haliphax",
      time: "2022-10-21T02:00:00Z",
      data: getStreamerData("haliphax"),
    },
    {
      streamer: "lucecarter",
      time: "2022-10-21T05:00:00Z",
      data: getStreamerData("lucecarter"),
    },
    {
      streamer: "ukmadlz",
      time: "2022-10-21T08:00:00Z",
      data: getStreamerData("ukmadlz"),
    },
    {
      streamer: "matty_twoshoes",
      time: "2022-10-21T11:00:00Z",
      data: getStreamerData("matty_twoshoes"),
    },
    {
      streamer: "finitesingularity",
      time: "2022-10-21T14:00:00Z",
      data: getStreamerData("finitesingularity"),
    },
    {
      streamer: "geometricjim",
      time: "2022-10-21T17:00:00Z",
      data: getStreamerData("geometricjim"),
    },
    {
      streamer: "whitep4nth3r",
      time: "2022-10-21T20:00:00Z",
      data: getStreamerData("whitep4nth3r"),
    },
  ];

  return {
    props: {
      schedule,
    },
  };
}
