import { DETAILS_PATH, DETAILS_SECTIONS, TARGET_BLANK } from "utils/constants";

const footerColumns = [
  {
    title: "links",
    links: [
      {
        text: "contact-us",
        url: DETAILS_PATH + DETAILS_SECTIONS.contact,
      },
      {
        text: "how-to-donate",
        url: DETAILS_PATH + DETAILS_SECTIONS.donate,
      },
      {
        text: "mission-title",
        url: DETAILS_PATH + DETAILS_SECTIONS.mission,
      },
      {
        text: "vision-title",
        url: DETAILS_PATH + DETAILS_SECTIONS.vision,
      },
    ],
  },
  {
    title: "social-network",
    links: [
      {
        text: "Facebook",
        target: TARGET_BLANK,
        url: "https://www.facebook.com/educacionplus/",
      },
      {
        text: "Instagram",
        target: TARGET_BLANK,
        url: "https://instagram.com/educacion_plus",
      },
    ],
  },
];

export { footerColumns };
