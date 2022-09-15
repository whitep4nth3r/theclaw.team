import { NextSeo } from "next-seo";

import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Styles from "@styles/Typography.module.css";

import TeamData from "@utils/TeamData";
import Layout from "@components/Layout";
import Streamers from "@components/Streamers";

import PageTitle from "@components/PageTitle";
import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForPage } from "@utils/OpenGraph";

export default function Home({ streamers, frontMatter, contentHtml }) {
  const imageUrl = generateImageUrlForPage({
    pageTitle: frontMatter.title,
  });

  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          title: frontMatter.title,
          description: frontMatter.description,
          url: "https://theclaw.team/",
          site_name: "The Claw Stream Team",
          type: "website",
          locale: "en_US",
          images: [
            {
              url: imageUrl,
              width: IMG_WIDTH,
              height: IMG_HEIGHT,
              alt: `Open Graph Image for ${frontMatter.title} on theclaw.team`,
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
        <PageTitle title={frontMatter.title} />
        <div className={Styles.typography} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <Streamers streamers={streamers} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const streamers = await TeamData.getStreamers();

  const fileContents = fs.readFileSync("./data/home.md", "utf-8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      streamers,
      contentHtml,
      frontMatter: matterResult.data,
    },
  };
}
