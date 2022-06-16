import {
  CardsGrid,
  Hero,
  TextWithMediaCarousel,
  SimpleHero,
  TextWithMedia,
  Timeline,
} from "components";
import { Button } from "components/shared";
import HeroImage from "media/imgs/hero1.jpg";
import Team from "media/imgs/team1.jpg";
import { BUTTON_TYPES, SIMPLE_HERO_TYPES } from "utils/constants";
import { useTranslation } from "utils/i18n/useTranslation";
import {
  timelineEntries,
  involvementCards,
  activityCarouselItems,
} from "./page-data";
import styles from "./Home.module.scss";
import { TimelineEntryProps } from "components/timeline/TimelineProps";
import { CardProps } from "components/cards-grid/partials/CardProps";
import { CarouselItemProps } from "components/text-with-media-carousel/partials/CarouselItemProps";

const Home = (): JSX.Element => {
  const getInvolvedId = "getInvolved";
  const activitiesId = "activities";
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el && el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const mapTimeLineEntries = (
    entries: Array<TimelineEntryProps>
  ): Array<TimelineEntryProps> => {
    return entries.map((e) => {
      return {
        date: t(e.date),
        title: t(e.title),
        description: t(e.description),
      };
    });
  };

  const mapInvolvementCards = (entries: Array<CardProps>): Array<CardProps> => {
    return entries.map((c) => {
      return {
        ...c,
        linkText: t(c.linkText),
        title: t(c.title),
        description: t(c.description),
      };
    });
  };

  const mapActivities = (
    entries: Array<CarouselItemProps>
  ): Array<CarouselItemProps> => {
    return entries.map((a) => {
      return {
        ...a,
        title: t(a.title),
        description: t(a.description),
      };
    });
  };

  return (
    <>
      <Hero
        eyebrow={t("make-a-difference")}
        title={t("you-can-help")}
        ctaText={t("what-are-we-doing")}
        ctaCallback={() => scrollTo(activitiesId)}
        bgImage={HeroImage}
      />
      <TextWithMedia
        title={t("who-are-we")}
        text={t("who-is-edplus")}
        image={Team}
      />
      <Timeline
        entries={mapTimeLineEntries(timelineEntries)}
        title={t("where-do-we-come-from")}
      />
      <SimpleHero
        type={SIMPLE_HERO_TYPES.primary}
        title={t("how-to-get-involved")}
        text={t("how-to-get-involved-description")}
        id={getInvolvedId}
      />
      <CardsGrid cards={mapInvolvementCards(involvementCards)} />
      <TextWithMediaCarousel
        title={t("activities")}
        description={t("activities-description")}
        carouselItems={mapActivities(activityCarouselItems)}
        id={activitiesId}
      />
      <SimpleHero
        type={SIMPLE_HERO_TYPES.light}
        title={t("ready-to-get-involved")}
        text={t("ready-to-get-involved-description")}
      >
        <Button
          type={BUTTON_TYPES.primary}
          text={t("how-to-get-involved")}
          className={styles.getInvolvedButton}
          callback={() => scrollTo(getInvolvedId)}
        />
      </SimpleHero>
    </>
  );
};

export default Home;
