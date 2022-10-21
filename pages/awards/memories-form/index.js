import { useEffect } from "react";
import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import styles from "@styles/MemoriesForm.module.css";
import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForPage } from "@utils/OpenGraph";

import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Styles from "@styles/Typography.module.css";

export default function MemoriesForm({ frontMatter, contentHtml }) {

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
                }}>
            </NextSeo>

            <Layout>
                <PageTitle title={frontMatter.title} />
                <div className={Styles.typography} dangerouslySetInnerHTML={{ __html: contentHtml }} />

                <form name="memories" method="POST" data-netlify="true" action="/awards/memories-form" className={styles.memoriesform}>
                    <input type="hidden" name="memories-name" value="memories" />
                    <label className={styles.memoriesform__label}>Title: <input type="text" name="title" className={styles.memoriesform__input} /></label>
                    <label className={styles.memoriesform__label}>Description: <textarea name="description" className={styles.memoriesform__input}></textarea></label>
                    <label className={styles.memoriesform__label}>Link: <input type="url" name="link" className={styles.memoriesform__input} /></label>
                    <button type="submit" className={styles.memoriesform__button}>Save</button>
                </form>

            </Layout>
        </>
    )
}

export async function getServerSideProps() {
    const fileContents = fs.readFileSync("./data/clawawards.md", "utf-8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        props: {
            contentHtml,
            frontMatter: matterResult.data,
        },
    };
}
