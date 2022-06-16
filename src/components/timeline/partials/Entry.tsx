import { EntryProps } from "./EntryProps";
import styles from "./Entry.module.scss";
import classNames from "classnames";
import { Title } from "components/shared";
import { TITLE_TYPES } from "utils/constants";
import { useInView } from "react-intersection-observer";

const Entry = (props: EntryProps): JSX.Element => {
  const { date, title, description, order, isLast, revealLine, isInView } =
    props;

  const { ref, inView } = useInView({
    onChange: (inView) => isInView(inView),
    triggerOnce: true,
  });

  return (
    <li
      className={classNames(styles.root, {
        [styles.odd]: order % 2 === 0,
        [styles.last]: isLast,
        [styles.reveal]: inView,
        [styles.revealLine]: revealLine,
      })}
      ref={ref}
    >
      <div className={styles.contentRight}>
        <span>{date}</span>
      </div>
      <div className={styles.contentLeft}>
        <Title title={title} type={TITLE_TYPES.h4} className={styles.title} />
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export default Entry;
