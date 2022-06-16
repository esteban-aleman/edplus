import { TitleProps } from "./TitleProps";
import styles from "./Title.module.scss";
import classNames from "classnames";

const Header = (props: TitleProps): JSX.Element => {
  const { title, type, className } = props;
  return (
    <div className={classNames(styles[type], className)}>{title}</div>
  );
};

export default Header;
