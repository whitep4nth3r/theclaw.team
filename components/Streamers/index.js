import styles from "@styles/Streamers.module.css";
import Link from "next/link";
import StreamerAvatar from "@components/StreamerAvatar";

export default function Streamers({ streamers }) {
  return (
    <ol className={styles.streamers}>
      {streamers.map((streamer) => (
        <li className={styles.streamers__item} key={streamer.id}>
          <Link href={`/${streamer.login}`}>
            <a className={styles.item}>
              <StreamerAvatar
                imageUrl={streamer.profile_image_url}
                name={streamer.display_name}
                bio={streamer.description}
                live={streamer.online}
                isPartner={streamer.broadcaster_type === "partner"}
                hasBanner={false}
              />
            </a>
          </Link>
        </li>
      ))}
    </ol>
  );
}
