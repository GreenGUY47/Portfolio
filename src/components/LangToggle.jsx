import { useTranslation } from "react-i18next";

function LangToggle() {
  const { i18n } = useTranslation();
  const isUrdu = i18n.language === "ur";

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);

    localStorage.setItem("lang", lang);

    document.documentElement.lang = lang;

    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={() => changeLang(isUrdu ? "en" : "ur")}
      className="px-3 py-2 rounded-xl dark:bg-gray-700 text-white text-sm font-bold dark:hover:bg-gray-600 transition bg-orange-600  border w-17 "
    >
      {isUrdu ? "English" : "اردو"}
    </button>
  );
}

export default LangToggle;
