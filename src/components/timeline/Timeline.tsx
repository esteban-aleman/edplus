import Entry from "./partials/Entry";
import { TimelineProps } from "./TimelineProps";
import styles from "./Timeline.module.scss";
import { Title } from "components/shared";
import { TITLE_TYPES } from "utils/constants";
import { useCallback, useState } from "react";

const Timeline = (props: TimelineProps): JSX.Element => {
  const { title, entries } = props;
  const [revealed, setRevealed] = useState(entries.map(() => false));

  const handleReveal = useCallback((isInView: boolean, index: number) => {
    setRevealed((prev) => {
      const updatedCopy = [...prev];
      updatedCopy[index] = isInView;
      return updatedCopy;
    });
  }, []);

  return (
    <div className={styles.root}>
      <Title title={title} type={TITLE_TYPES.h3} className={styles.title} />
      <ol className={styles.list}>
        {entries.map((e, i) => (
          <Entry
            key={e.title}
            date={e.date}
            title={e.title}
            description={e.description}
            order={i}
            isFirst={i === 0}
            isLast={i + 1 === entries.length}
            revealLine={revealed[i + 1]}
            isInView={(isInView: boolean) => handleReveal(isInView, i)}
          />
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
