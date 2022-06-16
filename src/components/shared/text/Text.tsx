import { TextProps } from "./TextProps";
import styles from "./Text.module.scss";
import classNames from "classnames";

const Text = (props: TextProps): JSX.Element => {
  const { text, className } = props;
  return (
    <div className={classNames(styles.root, className)}>{text}</div>
  );
};

export default Text;
