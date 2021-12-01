import styles from "@styles/StreamerAvatar.module.css";
import CheckMark from "@components/Svg/CheckMark";
import Banner from "@components/Svg/Banner";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

export default function StreamerAvatar({
  imageUrl,
  name,
  bio,
  live,
  isPartner,
  hasBanner,
  hasDescription,
}) {
  const renderBannerAvatar = () => {
    return (
      <>
        {live && <p className={styles.banner__AvatarLive}>Live</p>}
        <div className={styles.banner__Avatar}>
          <img
            className={styles.banner__AvatarImg}
            src={imageUrl}
            alt={`Twitch profile image of ${name}`}
          />
          {isPartner && (
            <span className={styles.banner__AvatarStatus}>
              <CheckMark />
            </span>
          )}
        </div>
        <h1 className={styles.banner__AvatarProfileBanner}>
          <span className={styles.visuallyHidden}>{name}</span>
          <Banner name={name} />
        </h1>
        {hasDescription && <p className={styles.avatar__description}>{bio}</p>}
      </>
    );
  };

  const renderBaseAvatar = () => {
    return (
      <>
        <div
          className={cx({
            avatar: true,
            avatar__isLive: live,
          })}>
          {live && <p className={styles.avatar__live}>Live</p>}
          <img
            className={styles.avatar__img}
            src={imageUrl}
            alt={`Twitch profile image of ${name}`}
          />
          <span className={styles.avatar__nameContainer}>
            {isPartner && (
              <span className={styles.avatar__status}>
                <CheckMark />
              </span>
            )}
            <h2 className={styles.avatar__name}>@{name}</h2>
          </span>
        </div>
        {hasDescription && <p className={styles.avatar__description}>{bio}</p>}
      </>
    );
  };

  return <>{hasBanner ? renderBannerAvatar() : renderBaseAvatar()}</>;
}
