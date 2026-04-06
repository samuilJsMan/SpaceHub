import Section from "../components/layout/section";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../components/sharable/primaryButton";
import MagnefiyngGlass from "../components/SVGs/MagnefiyngGlassSVG";
import point from "../assets/point.png";
import date from "../assets/date.png";
import time from "../assets/time.png";
const Explore = () => {
  const { t } = useTranslation();
  return (
    <Section className="intro">
      <h1 className="title">
        <div className="top">{t("main.intro.title.0")}</div>
        <div className="bottom">{t("main.intro.title.1")}</div>
      </h1>
      <p className="description">{t("main.intro.description")}</p>
      <div className="searchBar">
        <div className="location chose">
          <div className="label">{t("main.intro.searchBar.select.0")}</div>
          <div className="selected">
            <img src={point} alt="#" />
            New York, NY
          </div>
        </div>
        <div className="date chose">
          <div className="label">{t("main.intro.searchBar.select.1")}</div>
          <div className="selected">
            <img src={date} alt="#" />
            Oct 24, 2024
          </div>
        </div>
        <div className="duration chose">
          <div className="label">{t("main.intro.searchBar.select.2")}</div>
          <div className="selected">
            <img src={time} alt="#" />
            09:00 - 17:00
          </div>
        </div>
        <div className="buttonWrapper">
          <PrimaryButton className="searchButton">
            <MagnefiyngGlass></MagnefiyngGlass>
            <div className="text">
              {t("main.intro.searchBar.button")}  
            </div>
          </PrimaryButton>
        </div>
      </div>
    </Section>
  );
};

export { Explore };
