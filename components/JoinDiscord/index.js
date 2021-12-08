import styles from "@styles/JoinDiscord.module.css";
import DiscordIcon from "@components/JoinDiscord/svg/DiscordIcon";

export default function JoinDiscord() {
  return (
    <a className={styles.joinDiscord} href="https://discord.gg/theclaw" target="_blank">
      <span className={styles.joinDiscord__checkOut}>
        Check out
        <span role="img" aria-label="hand pointing down">
          👇
        </span>
      </span>
      <span className={styles.joinDiscord__discord}>
        <DiscordIcon />
      </span>

      <p className={styles.joinDiscord__cta}>Join The Claw Discord Community →</p>
    </a>
  );
}
