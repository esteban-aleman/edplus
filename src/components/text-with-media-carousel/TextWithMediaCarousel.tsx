import { TextWithMediaCarouselProps } from "./TextWithMediaCarouselProps";
import styles from "./TextWithMediaCarousel.module.scss";
import CarouselItem from "./partials/CarouselItem";
import { Title, Text } from "components/shared";
import { TITLE_TYPES } from "utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper";
import classnames from "classnames";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TextWithMediaCarousel = (
  props: TextWithMediaCarouselProps
): JSX.Element => {
  const { id, title, description, carouselItems } = props;

  return (
    <div id={id} className={styles.root}>
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <Title title={title} className={styles.title} type={TITLE_TYPES.h3} />
          <Text text={description} className={styles.text} />
        </div>

        <div className={styles.carouselContainer}>
          <Swiper
            effect={"fade"}
            pagination={{
              el: `.customMWTCPagination`,
              clickable: true,
              renderBullet: (i, className) => {
                return `<span class="${className}"><span class="${styles.paginationBullet}"></span></span>`;
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1500}
            modules={[EffectFade, Pagination, Autoplay]}
          >
            {carouselItems.map((c) => (
              <SwiperSlide key={c.title}>
                <CarouselItem
                  image={c.image}
                  title={c.title}
                  description={c.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={classnames(
              "customMWTCPagination",
              styles.customMWTCPagination
            )}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TextWithMediaCarousel;
