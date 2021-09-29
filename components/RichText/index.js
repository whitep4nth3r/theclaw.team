import styles from "@styles/Typography.module.css";
import RichTextStyles from "@styles/RichText.module.css";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

function renderOptions(links) {
  const entryMap = new Map();

  for (const entry of links?.entries?.inline) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1 className={styles.typography__h1}>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className={styles.typography__h2}>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className={styles.typography__h3}>{children}</h3>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className={styles.typography__body}>{children}</p>,
      [BLOCKS.HR]: (node, children) => <hr className={styles.typography__hr} />,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className={styles.typography__li}>{children}</li>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className={styles.typography__ol}>{children}</ol>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className={styles.typography__ul}>{children}</ul>,
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        const entry = entryMap.get(node.data.target.sys.id);

        switch (entry.__typename) {
          case "Page":
            const { slug, title } = entry;

            return (
              <Link href={`/${slug}`}>
                <a className={styles.typography__a}>{title}</a>
              </Link>
            );
        }
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a target="_blank" href={node.data.uri} className={styles.typography__a}>
          {children}
        </a>
      ),
      [MARKS.UNDERLINE]: (node, children) => (
        <span className={styles.typography__underline}>{children}</span>
      ),
    },
  };
}

export default function RichText({ content }) {
  return (
    <div className={RichTextStyles.richText}>
      {documentToReactComponents(content.json, renderOptions(content.links))}
    </div>
  );
}
