// src/hooks/useTranslation.ts
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

type Translations = Record<string, string>;

const useTranslation = (namespace: string) => {

  const locale = useLocale();
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    const loadTranslations = async () => {
      const response = await fetch(`/messages/${locale}.json`);

      if (response.ok) {
        const data = await response.json();
        setTranslations(data[namespace]);
      } else {
        console.error('Failed to load translations');
      }
    };

    loadTranslations();
  }, [locale, namespace]);

  const t = (key: string): string => translations[key] || key;

  return { t };
};

export default useTranslation;
