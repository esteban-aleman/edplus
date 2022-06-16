import { CustomLinkProps } from "./CustomLinkProps";
import { TARGET_BLANK } from "utils/constants";
import { Link } from "react-router-dom";
import { useTranslation } from "utils/i18n/useTranslation";

const CustomLink = (props: CustomLinkProps): JSX.Element => {
  const { text, target, to, className, children } = props;
  const { getTranslatedPath } = useTranslation();
  return target === TARGET_BLANK ? (
    <a key={text} href={to} target={target} className={className}>
      {text}
      {children}
    </a>
  ) : (
    <Link key={text} to={getTranslatedPath(to)} className={className}>
      {text}
      {children}
    </Link>
  );
};

export default CustomLink;
