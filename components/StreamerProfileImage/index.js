import styles from "@styles/StreamerAvatar.module.css";
import CheckMark from "@components/Svg/CheckMark";

export default function StreamerProfileImage({ imageUrl, isPartner}) {
    return (
    <div className={styles.avatar}>
        <img
        className={styles.avatar__img}
        src={imageUrl}
        />
        <span className={styles.avatar__nameContainer}>
        {isPartner && (
            <span className={styles.avatar__status}>
            <CheckMark />
            </span>
        )}
        </span>
    </div>
    );
}
