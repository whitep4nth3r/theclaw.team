import NextAuth from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";
import TeamData from "@utils/TeamData";

export default NextAuth({
  callbacks: {
    async signIn(props) {
      const allowedStreamers = await TeamData.getStreamerLogins();
      const isAllowedToSignIn = allowedStreamers.includes(props.user.name.toLowerCase());

      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        // return false;
        // Or you can return a URL to redirect to:
        return "/unauthorized";
      }
    },
  },
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
      authorizationUrl: `https://id.twitch.tv/oauth2/authorize?response_type=code`,
    }),
  ],
});
