import { CardProps } from "./CardProps";
import styles from "./Card.module.scss";
import { Title, Text, Link } from "components/shared";
import { TITLE_TYPES } from "utils/constants";

const Card = (props: CardProps): JSX.Element => {
  const { image, title, description, linkText, linkUrl } = props;
  return (
    <li className={styles.root}>
      <div className={styles.imageContainer}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className={styles.bottomContainer}>
        <Title className={styles.title} title={title} type={TITLE_TYPES.h4} />
        <Text className={styles.text} text={description} />
        <Link className={styles.link} to={linkUrl}>
          {linkText}
        </Link>
      </div>
    </li>
  );
};

export default Card;
