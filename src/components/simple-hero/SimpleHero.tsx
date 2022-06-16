import { SimpleHeroProps } from "./SimpleHeroProps";
import styles from "./SimpleHero.module.scss";
import { Title, Text } from "components/shared";
import { TITLE_TYPES } from "utils/constants";
import classNames from "classnames";

const SimpleHero = (props: SimpleHeroProps): JSX.Element => {
  const { id, title, text, type, children } = props;
  return (
    <div id={id} className={classNames(styles.root, styles[type])}>
      <Title title={title} type={TITLE_TYPES.h3} className={styles.title} />
      <Text text={text} className={styles.text} />
      {children}
    </div>
  );
};

export default SimpleHero;
