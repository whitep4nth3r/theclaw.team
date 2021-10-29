import Image from "next/image";
import styles from "@styles/Awards.module.css";

export default function Awards({ awardsData }) {
  return (
    <div className={styles.awards}>
      {awardsData.map((category) => (
        <div key={category.sys.id} className={styles.awards__category}>
          <h2 className={styles.awards__categoryName}>{category.name}</h2>
          <div className={styles.awards__categoryNominees}>
            {category.linkedFrom.awardNominationCollection.items.map((nomination) => (
              <div key={nomination.sys.id}>
                <a
                  className={styles.awards__categoryLink}
                  href={nomination.externalLink}
                  aria-label={`View link for ${nomination.nominee}'s nomination for ${
                    category.name
                  } ${nomination.description !== null ? nomination.description : ""}`}
                  target="_blank">
                  <div className={styles.awards__categoryNomineeImgContainer}>
                    {nomination.isWinner && <p className={styles.awards__categoryWinner}>WINNER</p>}
                    <Image
                      src={nomination.image.url}
                      alt={nomination.image.description}
                      height={nomination.image.height}
                      width={nomination.image.width}
                      layout="responsive"
                    />
                  </div>
                  <p className={styles.awards__categoryNominee}>{nomination.nominee}</p>
                  <p className={styles.awards__categoryNomineeDescription}>
                    {nomination.description}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
