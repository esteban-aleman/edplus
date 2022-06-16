import { Detail } from "components/details-list/DetailsListProps";
import Contact from "media/imgs/contact.jpg";
import Donate from "media/imgs/donate.jpg";
import Vision from "media/imgs/vision.jpg";
import Mission from "media/imgs/mission.jpg";

export type Sections = {
  [dynamicKey: string]: {
    title: string;
    description?: string;
    image: string;
    details?: Array<Detail>;
  };
};

const sections: Sections = {
  contact: {
    title: "contact-us",
    image: Contact,
    details: [
      {
        title: "address-title",
        text: "address",
      },
      {
        title: "email-title",
        text: "edplus@edplus.or.cr",
      },
      {
        title: "phone-title",
        text: "+506 2227 8642",
      },
    ],
  },
  mission: {
    title: "mission-title",
    description: "mission-details",
    image: Mission,
  },
  vision: {
    title: "vision-title",
    description: "vision-details",
    image: Vision,
  },
  donate: {
    title: "donate-title",
    description: "donate-details",
    image: Donate,
    details: [
      {
        title: "promerica-bank",
        text: "CR000000000000",
      },
      {
        title: "bcr-bank",
        text: "CR000000000000",
      },
      {
        title: "sinpe-mobile",
        text: "+506 2227 8642",
      },
    ],
  },
};

export { sections };
