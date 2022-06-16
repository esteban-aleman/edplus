import { ButtonProps } from "./ButtonProps";
import styles from "./Button.module.scss";
import classnames from "classnames";

const Button = (props: ButtonProps): JSX.Element => {
  const { type, text, callback, className } = props;
  return (
    <button
      className={classnames(styles.root, styles[type], className)}
      onClick={callback}
    >
      {text}
    </button>
  );
};

export default Button;
