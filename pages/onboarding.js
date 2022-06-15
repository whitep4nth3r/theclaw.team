import { useSession, getSession } from "next-auth/react";
import { NextSeo } from "next-seo";

import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Styles from "@styles/Typography.module.css";

import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import PleaseSignIn from "@components/PleaseSignIn";

import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForPage } from "@utils/OpenGraph";

export default function Onboarding({ contentHtml, frontMatter }) {
  const { data: session } = useSession();

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
          url: "https://theclaw.team/onboarding,",
          site_name: "The Claw Stream Team — Onboarding",
          type: "website",
          locale: "en_US",
          images: [
            {
              url: imageUrl,
              width: IMG_WIDTH,
              height: IMG_HEIGHT,
              alt: `Open Graph Image for the ${frontMatter.title} on theclaw.team`,
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
        {session && (
          <div className={Styles.typography} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        )}
        {!session && <PleaseSignIn />}
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const fileContents = fs.readFileSync("./data/onboarding.md", "utf-8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      session: await getSession(context),
      contentHtml,
      frontMatter: matterResult.data,
    },
  };
}
