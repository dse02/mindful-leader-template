import { createContext, useContext, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { translations, Lang } from "./translations";

type Translations = (typeof translations)[Lang];

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  switchLang: () => void;
  localPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const lang: Lang = location.pathname.startsWith("/en") ? "en" : "cs";
  const t = translations[lang];

  const switchLang = () => {
    const currentPath = location.pathname;
    if (lang === "cs") {
      navigate(`/en${currentPath}`);
    } else {
      const newPath = currentPath.replace(/^\/en/, "") || "/";
      navigate(newPath);
    }
  };

  const localPath = (path: string) => {
    if (lang === "en") {
      return `/en${path}`;
    }
    return path;
  };

  const value = useMemo(() => ({ lang, t, switchLang, localPath }), [lang, location.pathname]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
