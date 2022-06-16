import { CardsGridProps } from "./CardsGridProps";
import styles from "./CardsGrid.module.scss";
import Card from "./partials/Card";

const CardsGrid = (props: CardsGridProps): JSX.Element => {
  const { cards } = props;
  return (
    <ul className={styles.root}>
      {cards.map((c) => (
        <Card
          key={c.title}
          image={c.image}
          title={c.title}
          description={c.description}
          linkText={c.linkText}
          linkUrl={c.linkUrl}
        />
      ))}
    </ul>
  );
};

export default CardsGrid;
