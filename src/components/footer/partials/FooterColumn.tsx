import { FooterColumnProps } from "./FooterColumnProps";
import styles from "./FooterColumn.module.scss";
import { TARGET_BLANK } from "utils/constants";
import { Link } from "components/shared";

const FooterColumn = (props: FooterColumnProps): JSX.Element => {
  const { title, links } = props;

  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>
      <ul className={styles.linkList}>
        {links.map((l) =>
          l.target === TARGET_BLANK ? (
            <a
              key={l.text}
              href={l.url}
              target={l.target}
              className={styles.link}
            >
              {l.text}
            </a>
          ) : (
            <Link key={l.text} to={l.url} className={styles.link}>
              {l.text}
            </Link>
          )
        )}
      </ul>
    </div>
  );
};

export default FooterColumn;
