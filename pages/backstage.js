import { useSession, signIn } from "next-auth/client";
import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import typography from "@styles/Typography.module.css";
import styles from "@styles/Backstage.module.css";
import Twitch from "@components/Svg/Twitch";

export default function Backstage() {
  const [session, loading] = useSession();

  return (
    <>
      <NextSeo title="Backstage" description="The Claw backstage area for team members" />

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
