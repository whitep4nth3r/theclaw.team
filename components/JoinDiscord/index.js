import Styles from "@styles/JoinDiscord.module.css";
import BgImage from "./BgImage";

export default function JoinDiscord() {
  return (
    <a href="https://discord.gg/theclaw" target="_blank" className={Styles.joinDiscord}>
      <p className={Styles.joinDiscord__cta}>Join The Claw Discord Community</p>
      <span className={Styles.joinDiscord__bg}>
        <BgImage
          image={{
            height: 360,
            width: 1140,
            description: "A tiled moth pattern with a red overlay.",
            url: "https://images.ctfassets.net/hxjyb5c77bom/3hxGIse7VXsbNTTaOxlfFY/b7028db2faed682ed64286416773f3e9/red_moth_tile.png",
          }}
        />
      </span>
    </a>
  );
}
