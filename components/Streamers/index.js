import Styles from "@styles/Streamers.module.css";
import Link from "next/link";

export default function Streamers({ streamers }) {
  return (
    <ol className={Styles.streamers}>
      {streamers.map((streamer) => (
        <li className={Styles.streamers__item} key={streamer.id}>
          <Link href={`/${streamer.login}`}>
            <a className={Styles.item}>
              <div className={Styles.item__imgContainer}>
                <img
                  className={Styles.item__img}
                  src={streamer.profile_image_url}
                  alt={`${streamer.display_name} Twitch profile image`}
                />
                <h2 className={Styles.item__name}>{streamer.display_name}</h2>
              </div>

              <p className={Styles.item__description}>{streamer.description}</p>
            </a>
          </Link>
        </li>
      ))}
    </ol>
  );
}
