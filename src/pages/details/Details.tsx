import { TextWithMedia, DetailsList } from "components";
import { Sections, sections } from "./page-data";
import styles from "./Details.module.scss";
import { Navigate, useParams } from "react-router-dom";
import { DETAILS_SECTIONS } from "utils/constants";
import { useTranslation } from "utils/i18n/useTranslation";
import { Link } from "components/shared";

const Details = (): JSX.Element => {
  const { section } = useParams();
  const { t } = useTranslation();

  const mapSections = (sections: Sections): Sections => {
    const keys = Object.keys(sections);
    const translatedSections: Sections = {};
    keys.forEach((k) => {
      translatedSections[k] = {
        ...sections[k],
        title: t(sections[k].title),
        description: t(sections[k].description || ""),
        details: sections[k].details?.map((d) => {
          return {
            title: t(d.title),
            text: t(d.text),
          };
        }),
      };
    });
    return translatedSections;
  };

  const translatedSections = mapSections(sections);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Link to={""} className={styles.link}>
          {t("go-back")}
        </Link>
      </div>
      {section && Object.keys(DETAILS_SECTIONS).includes(section) ? (
        <TextWithMedia
          title={translatedSections[section].title}
          text={translatedSections[section].description}
          image={translatedSections[section].image}
        >
          {translatedSections[section].details && (
            <DetailsList details={translatedSections[section].details || []} />
          )}
        </TextWithMedia>
      ) : (
        <Navigate to="/" replace />
      )}
    </div>
  );
};

export default Details;
