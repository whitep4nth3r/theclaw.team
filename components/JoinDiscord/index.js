import Styles from "@styles/JoinDiscord.module.css";
import DiscordIcon from "@components/JoinDiscord/svg/DiscordIcon";

export default function JoinDiscord() {
  return (
    <a className={Styles.joinDiscord} href="https://discord.gg/theclaw" target="_blank">
      <span className={Styles.joinDiscord__checkOut}>
        Check out
        <span role="img" aria-label="hand pointing down">
          👇
        </span>
      </span>
      <span className={Styles.joinDiscord__discord}>
        <DiscordIcon />
      </span>

      <p className={Styles.joinDiscord__cta}>Join The Claw Discord Community →</p>
    </a>
  );
}
