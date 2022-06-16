import { useParams } from "react-router-dom";
import ES from "./es.json";
import EN from "./en.json";
import { useState, useEffect, useCallback } from "react";

export enum Language {
  EN = "en",
  ES = "es",
}

const getLanguageDictionary = (lang: string): { [key: string]: string } => {
  switch (lang) {
    case Language.EN:
      return EN;
    default:
      return ES;
  }
};

export const useTranslation = () => {
  const { lang } = useParams();
  const [dictionary, setDictionary] = useState<{ [key: string]: string }>(
    getLanguageDictionary(lang || Language.ES)
  );

  useEffect(() => {
    setDictionary(getLanguageDictionary(lang || Language.ES));
  }, [lang]);

  const t = useCallback(
    (key: string) => {
      return dictionary?.[key] || key;
    },
    [dictionary]
  );

  const getTranslatedPath = (path: string): string => {
    return `${path}/${lang && lang === Language.EN ? `${Language.EN}` : ""}`;
  };

  return { t, getTranslatedPath };
};
