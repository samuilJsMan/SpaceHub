import Section from "../components/layout/section";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../components/sharable/primaryButton";
import MagnefiyngGlass from "../components/SVGs/MagnefiyngGlassSVG";
import point from "../assets/point.png";
import date from "../assets/date.png";
import time from "../assets/time.png";
import search from "../assets/search.png";
import book from "../assets/book.png";
import work from "../assets/work.png";
const Explore = () => {
  const { t } = useTranslation();
  const guideCards = [
    {
      icon: search,
      title: t("main.guide.cards.0.title"),
      description: t("main.guide.cards.0.description")
    },
    {
      icon: book,
      title: t("main.guide.cards.1.title"),
      description: t("main.guide.cards.1.description")
    },
    {
      icon: work,
      title: t("main.guide.cards.2.title"),
      description: t("main.guide.cards.2.description")
    }
  ];

  return (
    <>  
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
      <Section className="guide">
        <div className="description">
          <h2>{t("main.guide.title")}</h2>
          <p>{t("main.guide.description")}</p>
        </div>
        <div className="cards">
          {guideCards.map((card) => (
            <div className="card" key={card.title}>
              <div className="iconContainer">
                <img className="icon" src={card.icon} alt="" />
              </div>
              <div className="title">{card.title}</div>
              <div className="description">{card.description}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export { Explore };
