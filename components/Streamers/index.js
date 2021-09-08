import Styles from "@styles/Streamers.module.css";
import Link from "next/link";

export default function Streamers({ streamers }) {
  return (
    <ol className={Styles.streamers}>
      {streamers.map((streamer) => (
        <li className={Styles.streamers__item} key={streamer.id}>
          <Link href={`/${streamer.login}`}>
            <a>
              <img
                className={Styles.streamers__img}
                src={streamer.profile_image_url}
                alt={`${streamer.display_name} Twitch profile image`}
              />
              <h2>{streamer.display_name}</h2>
              <p>{streamer.description}</p>
            </a>
          </Link>
        </li>
      ))}
    </ol>
  );
}
