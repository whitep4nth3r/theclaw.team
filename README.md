# theclaw.team | The Claw Stream Team on Twitch

![A screenshot of theclaw.team in desktop view showing a red sidebar to the left wiht menu links below the moth logo and the introduction to the team and what it is about on the right](screenshot.png)

This project showcases The Claw Twitch stream team and uses the following services:

- Twitch authentication for team members via [next-auth](https://next-auth.js.org/)
- A DarkLang API developed by [jwalter](https://github.com/jwalter)

This project is open source (MIT) and your contributions are welcome!

If you discover any issues with the site or would like to request any new features, please submit an
issue to the repository,

## Getting started

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To contribute to this project, fork the repository to your GitHub account, and clone it to your
local machine using git or the GitHub CLI.

### Install dependencies

```bash
cd path/to/folder
npm install
```

### Add environment variables to connect to services

Create a `.env` file at the root of the project.

```bash
cd path/to/folder
touch .env
```

Copy the environment variable keys from `.env.example` and add those into your `.env` file.

```text
TWITCH_CLIENT_ID=
TWITCH_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000
```

## Set up a new Twitch app

The project requires a connection to a Twitch application in order to enable Twitch authentication.

[Learn how to get started with the Twitch API](https://dev.twitch.tv/docs/api).

- Create a new Twitch application
- Add the following OAuth Redirect URL to your new app:
  `http://localhost:3000/api/auth/callback/twitch`
- Create a Client ID and Client Secret

![Screenshot of Twitch app setup](twitch_app_screenshot.png)

Add the following credentials to your `.env` file:

```text
TWITCH_CLIENT_ID={YOUR_NEW_CLIENT_ID}
TWITCH_CLIENT_SECRET={YOUR_NEW_CLIENT_SECRET}
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=yourRandString
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project running locally.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Production environment

This project is hosted on Vercel. When you make a pull request, the owner of the organisation will
be asked to authorise the deploy preview to kick off a build.

When the deploy preview is ready, the pull request will update with a URL.
