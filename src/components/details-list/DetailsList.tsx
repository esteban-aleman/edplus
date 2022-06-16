import { DetailsListProps } from "./DetailsListProps";
import styles from "./DetailsList.module.scss";
import { Title, Text } from "components/shared";
import { TITLE_TYPES } from "utils/constants";

const DetailsList = (props: DetailsListProps): JSX.Element => {
  const { details } = props;
  return (
    <div className={styles.root}>
      {details.map((d) => (
        <div key={d.title}>
          <Title
            title={d.title}
            type={TITLE_TYPES.h5}
            className={styles.title}
          />
          <Text text={d.text} className={styles.text} />
        </div>
      ))}
    </div>
  );
};

export default DetailsList;
