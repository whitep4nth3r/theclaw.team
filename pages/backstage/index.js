import { useSession, getSession, signIn } from "next-auth/client";
import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import typography from "@styles/Typography.module.css";
import styles from "@styles/Backstage.module.css";
import Twitch from "@components/Svg/Twitch";
import Link from "next/link";
import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForPage } from "@utils/OpenGraph";

export default function Backstage() {
  const [session, loading] = useSession();

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
        description={page.metaDescription}
        openGraph={{
          title: page.title,
          description: page.metaDescription,
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
            <h2 className={typography.typography__h3}>
              Welcome to the super-secret backstage area, {session.user.name}!
            </h2>
            <p className={typography.typography__body}>
              Coming soon! Here you'll find branded overlays and other fun things that you can
              access when logged in via Twitch.
            </p>
            <ul>
              <li>
                <Link href="/backstage/overlays/one">
                  <a className={styles.backstage__overlayLink}>ONE</a>
                </Link>
              </li>
              <li>
                <Link href="/backstage/overlays/whos-next">
                  <a className={styles.backstage__overlayLink}>WHOS NEXT</a>
                </Link>
              </li>
            </ul>
          </>
        )}
        {!session && (
          <>
            <h2 className={typography.typography__body}>
              Please log in via Twitch to access the super-secret backstage area — for team members
              only.
            </h2>
            <a
              className={styles.backstage__signIn}
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}>
              <Twitch />
              <span>Log in with Twitch</span>
            </a>
          </>
        )}
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
