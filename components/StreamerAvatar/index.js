import styles from "@styles/StreamerAvatar.module.css";
import CheckMarkSvg from "@components/StreamerAvatar/svg/CheckMarkSvg";

export default function StreamerAvatar({ imageUrl, name, bio, live, isPartner }) {
  return (
    <>
      <div className={styles.avatar}>
        {live && <p className={styles.avatar__live}>Live</p>}
        <img className={styles.avatar__img} src={imageUrl} alt={`${name} Twitch profile image`} />
        <span className={styles.avatar__nameContainer}>
          {isPartner && (
            <span className={styles.avatar__status}>
              <CheckMarkSvg />
            </span>
          )}
          <h2 className={styles.avatar__name}>@{name}</h2>
        </span>
      </div>
      <p className={styles.avatar__description}>{bio}</p>
    </>
  );
}
