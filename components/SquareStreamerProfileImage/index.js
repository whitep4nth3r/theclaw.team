import styles from "@styles/SquareStreamerProfileImage.module.css";
import CheckMark from "@components/Svg/CheckMark";

export default function SquareStreamerProfileImage({ imageUrl, isPartner}) {
    return (
    <div className={styles.avatar}>
        <img
            className={styles.avatar__img}
            src={imageUrl}
        />
        {isPartner && (
            <span className={styles.avatar__status}>
                <CheckMark />
            </span>
        )}
    </div>
    );
}
