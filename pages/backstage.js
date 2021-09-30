import { useSession, signIn, signOut } from "next-auth/client";
import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import styles from "@styles/Typography.module.css";
import Image from "next/image";

export default function Backstage() {
  const [session, loading] = useSession();

  return (
    <>
      <NextSeo title="Backstage" description="Backstage area coming soon for team members" />

      <Layout>
        <PageTitle title="Backstage" />

        {session && (
          <>
            <Image
              src={session.user.image}
              alt={`Profile image for ${session.user.name}`}
              height="70"
              width="70"
              layout="responsive"
            />
            <h2 className={styles.typography__h3}>Signed in as {session.user.name}</h2>{" "}
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}>
              Sign out
            </a>
          </>
        )}
        {!session && (
          <>
            <h2 className={styles.typography__h3}>Signed out!!!!</h2>{" "}
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
