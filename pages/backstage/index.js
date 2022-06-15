import { useSession, getSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import styles from "@styles/Backstage.module.css";
import Link from "next/link";
import PleaseSignIn from "@components/PleaseSignIn";
import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForPage } from "@utils/OpenGraph";

export default function Backstage() {
  const { data: session } = useSession();

  const page = {
    title: "Backstage",
    description: "The Claw backstage area for team members",
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
          url: "https://theclaw.team/backstage,",
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
        <PageTitle title="Backstage" />

        {session && (
          <>
            <h2 className={styles.backstage__text}>
              Welcome to the super-secret backstage area, {session.user.name}!
            </h2>

            <Link href="/onboarding">
              <a className={styles.backstage__onboardingLink}>Go to onboarding information</a>
            </Link>

            <p className={styles.backstage__text}>Branded Overlays (add as OBS sources):</p>
            <ul className={styles.backstage__list}>
              <li className={styles.backstage__listItem}>
                <Link href="/backstage/overlays/one">
                  <a className={styles.backstage__listItemLink}>The Claw Logo</a>
                </Link>
              </li>
              <li className={styles.backstage__listItem}>
                <Link href="/backstage/overlays/whos-next">
                  <a className={styles.backstage__listItemLink}>Who's Next Rotator</a>
                </Link>
              </li>
              <li className={styles.backstage__listItem}>
                <Link href="/backstage/overlays/raidathon">
                  <a className={styles.backstage__listItemLink}>Raidathon</a>
                </Link>
              </li>
            </ul>
          </>
        )}
        {!session && <PleaseSignIn />}
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
