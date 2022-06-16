import styles from "./Footer.module.scss";
import FooterColumn from "./partials/FooterColumn";
import { footerColumns } from "./footer-data";
import { useTranslation } from "utils/i18n/useTranslation";
import { FooterColumnProps } from "./partials/FooterColumnProps";
import { Link } from "components/shared";

const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  const mapColumns = (
    entries: Array<FooterColumnProps>
  ): Array<FooterColumnProps> =>
    entries.map((c) => {
      return {
        title: t(c.title),
        links: c.links.map((l) => {
          return {
            ...l,
            text: t(l.text),
          };
        }),
      };
    });
  const mappedColumns = mapColumns(footerColumns);

  return (
    <footer className={styles.root}>
      <div className={styles.top}>
        <div className={styles.contact}>
          <div aria-hidden={true} className={styles.logo}></div>
          <p className={styles.contactBlock}>{t("address")}</p>
          <p className={styles.contactBlock}>{"edplus@edplus.or.cr"}</p>
          <p className={styles.contactBlock}>{"+506 2227 8642"}</p>
        </div>
        <div className={styles.columns}>
          {mappedColumns.map((c) => (
            <FooterColumn key={c.title} title={c.title} links={c.links} />
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.legal}>
          <Link to="#" target={"_blank"} className={styles.legalLink}>
            {t("legal-document-one")}
          </Link>
          <span className={styles.separator}></span>
          <Link to="#" target={"_blank"} className={styles.legalLink}>
            {t("legal-document-two")}
          </Link>
          <span className={styles.separator}></span>
          <Link to="#" target={"_blank"} className={styles.legalLink}>
            {t("legal-document-three")}
          </Link>
        </div>
        <p className={styles.copyright}>{t("copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
