import { TextWithMediaProps } from "./TextWithMediaProps";
import styles from "./TextWithMedia.module.scss";
import { Title, Text } from "components/shared";
import { TITLE_TYPES } from "utils/constants";

const TextWithMedia = (props: TextWithMediaProps): JSX.Element => {
  const { title, text, image, children } = props;
  return (
    <div className={styles.root}>
      <div className={styles.contentLeft}>
        <Title title={title} type={TITLE_TYPES.h3} className={styles.title} />
        {text && <Text text={text} className={styles.text} />}
        {children}
      </div>
      <div className={styles.contentRight}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    </div>
  );
};

export default TextWithMedia;
