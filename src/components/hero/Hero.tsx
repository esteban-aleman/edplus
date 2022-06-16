import { HeroProps } from "./HeroProps";
import styles from "./Hero.module.scss";
import { Button, Title } from "components/shared";
import { BUTTON_TYPES, TITLE_TYPES } from "utils/constants";

const Hero = (props: HeroProps): JSX.Element => {
  const { bgImage, eyebrow, title, ctaText, ctaCallback } = props;
  return (
    <div className={styles.root} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.content}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <Title title={title} type={TITLE_TYPES.h3} className={styles.title} />
        <Button
          type={BUTTON_TYPES.secondary}
          text={ctaText}
          callback={ctaCallback}
        />
      </div>
    </div>
  );
};

export default Hero;
