import styles from "@styles/Typography.module.css";

export default function PageTitle({ title }) {
  return <h1 className={styles.typography__h1}>{title}</h1>;
}
