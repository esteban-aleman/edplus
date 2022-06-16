import { CarouselItemProps } from "./partials/CarouselItemProps";

export type TextWithMediaCarouselProps = {
  id?: string;
  title: string;
  description: string;
  carouselItems: Array<CarouselItemProps>;
};
