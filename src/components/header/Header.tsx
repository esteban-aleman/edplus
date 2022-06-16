import { Link, useLocation, useParams } from "react-router-dom";
import useScrollDirection from "utils/hooks/useScrollDirection";
import styles from "./Header.module.scss";
import classnames from "classnames";
import { Language, useTranslation } from "utils/i18n/useTranslation";

const Header = (): JSX.Element => {
  const scrollUp = useScrollDirection();
  const { lang } = useParams();
  const location = useLocation();
  const { t } = useTranslation();

  const getOptionalLanguagePath = (): string => {
    let newPath = location.pathname;
    // Clean path
    if (newPath.slice(-1) === "/") {
      newPath = newPath.slice(0, -1);
    }
    if (lang) {
      // Trim language param to set it
      newPath = newPath.slice(0, newPath.lastIndexOf("/"));
    }
    return `${newPath}${lang && lang === Language.EN ? "" : `/${Language.EN}`}`;
  };

  return (
    <header className={classnames(styles.root, { [styles.hidden]: !scrollUp })}>
      <div className={styles.container}>
        <Link to={""}>
          <div aria-hidden={true} className={styles.logo}></div>
        </Link>
        <Link className={styles.link} to={getOptionalLanguagePath()}>
          {t("optional-language")}
        </Link>
      </div>
    </header>
  );
};

export default Header;
