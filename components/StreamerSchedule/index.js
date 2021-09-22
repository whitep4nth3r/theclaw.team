import {
  formatTwitchScheduleTimeSlot,
  formatDateForDateTime,
  getDateFromTime,
  getMonthFromTime,
  getDayFromTime,
} from "@utils/Date";
import styles from "@styles/StreamerSchedule.module.css";

export default function StreamerSchedule({ segments, name }) {
  const showSchedule = segments?.length > 0;

  return (
    <>
      {showSchedule && (
        <div className={styles.schedule}>
          <h3 className={styles.schedule__title}>Up next</h3>
          {segments?.length > 0 &&
            segments.map((segment) => (
              <div className={styles.schedule__segment} key={segment.id}>
                <div className={styles.schedule__segmentDate}>
                  <time
                    dateTime={formatDateForDateTime(segment.start_time)}
                    className={styles.schedule__segmentDateTime}>
                    <span>{getDayFromTime(segment.start_time)}</span>
                    <span className={styles.schedule__segmentDateTime__date}>
                      {getDateFromTime(segment.start_time)}
                    </span>
                    <span>{getMonthFromTime(segment.start_time)}</span>
                  </time>
                </div>

                <div className={styles.schedule__segmentInfo}>
                  <p className={styles.schedule__segmentTitle}>{segment.title}</p>
                  {segment.category !== null && (
                    <p className={styles.schedule__segmentCat}>{segment.category.name}</p>
                  )}
                  <p className={styles.schedule__segmentTime}>
                    {formatTwitchScheduleTimeSlot(segment.start_time, segment.end_time)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
