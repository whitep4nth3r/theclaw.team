import { getServerSideSitemap } from "next-sitemap";
import TeamData from "@utils/TeamData";

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  // Single talks
  const streamerSlugs = await TeamData.getStreamerLogins();

  const streamerFields = streamerSlugs.map((slug) => {
    return {
      loc: `https://theclaw.team/${slug}`,
      lastmod: new Date().toISOString(),
    };
  });

  return getServerSideSitemap(ctx, streamerFields);
};

// Default export to prevent next.js errors
export default () => {};
