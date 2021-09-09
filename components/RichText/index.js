import TypographyStyles from "@styles/Typography.module.css";
import Styles from "@styles/RichText.module.css";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className={TypographyStyles.typography__body}>{children}</p>;
    },
  },
};

export default function RichText({ content }) {
  return <div className={Styles.richText}>{documentToReactComponents(content, renderOptions)}</div>;
}
