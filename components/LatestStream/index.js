import styles from "@styles/LatestStream.module.css";
import CheckMark from "@components/Svg/CheckMark";

export default function LatestStream({ stream, avatarUrl, isPartner, name, live }) {
  return (
    <>
      <h3 className={styles.latestStream__header}>Latest stream</h3>
      <a href={stream.url} className={styles.latestStream__headerLink} target="_blank">
        <img
          src={stream.thumbnail_url.replace("%{width}", "1920").replace("%{height}", "1080")}
          className={styles.latestStream__thumbnail}
          alt={`${name} latest stream thumbnail`}
        />

        <div className={styles.latestStream__meta}>
          <div className={styles.latestStream__avatar}>
            <img src={avatarUrl} alt={`${name}'s profile image on Twitch`} />
            {live && <p className={styles.latestStream__live}>Live</p>}
          </div>

          <p className={styles.latestStream__name}>
            {name}{" "}
            {isPartner && (
              <span className={styles.latestStream__status}>
                <CheckMark />
              </span>
            )}
          </p>
          <p className={styles.latestStream__title}>{stream.title}</p>
        </div>
      </a>
    </>
  );
}
