import { CarouselItemProps } from "./CarouselItemProps";
import styles from "./CarouselItem.module.scss";
import { Title, Text } from "components/shared";
import { TITLE_TYPES } from "utils/constants";

const CarouselItem = (props: CarouselItemProps): JSX.Element => {
  const { image, title, description } = props;
  return (
    <div className={styles.root}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.textContent}>
        <Title className={styles.title} title={title} type={TITLE_TYPES.h5} />
        <Text className={styles.text} text={description} />
      </div>
    </div>
  );
};

export default CarouselItem;
