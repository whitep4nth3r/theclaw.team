import { useSession, signIn } from "next-auth/client";
import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import styles from "@styles/Typography.module.css";

export default function Backstage() {
  const [session, loading] = useSession();

  return (
    <>
      <NextSeo title="Backstage" description="Backstage area coming soon for team members" />

      <Layout>
        <PageTitle title="Backstage" />

        {session && (
          <>
            <h1>Welcome you are logged in</h1>
          </>
        )}
        {!session && (
          <>
            <h2 className={styles.typography__h3}>
              Please sign in to access back stage as a team member
            </h2>{" "}
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}>
              Sign in
            </a>
          </>
        )}
      </Layout>
    </>
  );
}
