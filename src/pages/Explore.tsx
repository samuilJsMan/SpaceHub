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
import ArrowSVG from "../components/SVGs/ArrowSVG";
import SpaceCard from "../components/sharable/spaceCard";
import TheGrassPavilion from "../assets/TheGlassPavilion.png";
const Explore = () => {
  const { t } = useTranslation();
  const guideCards = [
    {
      icon: search,
      title: t("main.guide.cards.0.title"),
      description: t("main.guide.cards.0.description"),
    },
    {
      icon: book,
      title: t("main.guide.cards.1.title"),
      description: t("main.guide.cards.1.description"),
    },
    {
      icon: work,
      title: t("main.guide.cards.2.title"),
      description: t("main.guide.cards.2.description"),
    },
  ];
  const cardData = Array.from({ length: 40 }, () => {
    return {
      category: t("main.spaceNear.slider.types.1"),
      name: "The Glass Pavilion",
      price: Math.floor(Math.random() * 50),
      rating: Math.floor(Math.random() * 20 + 30) / 10,
      image: TheGrassPavilion,
      liked: !!Math.round(Math.random()),
    };
  });
  let currentPos = 0;
  function translate(direction: "left" | "right") {
    let element = document.getElementById("pageHolder");
    if (element) {
      if (direction == "left" && currentPos == 0) return;
      if (
        direction == "right" &&
        cardData.length / 6 <= Math.abs(currentPos) + 1
      )
        return;
      element.style.transform = `translate(${(direction == "left" ? (currentPos += 1) : (currentPos -= 1)) * 100}% , 0)`;
    }
  }
  type Card = {
    category: string;
    name: string;
    price: number;
    rating: number;
    image: string;
    liked:boolean
  };
  const pages = cardData.reduce<Card[][]>((acc, item, index) => {
    if (index % 6 === 0) {
      acc.push([]);
    }

    acc[Math.floor(index / 6)].push(item);
    return acc;
  }, []);
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
              <div className="text">{t("main.intro.searchBar.button")}</div>
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
      <Section className="spaceNear">
        <div className="sectionHead">
          <div className="textPart">
            <span className="supText">{t("main.spaceNear.supText")}</span>
            <h2 className="title">{t("main.spaceNear.title")}</h2>
            <p className="description">{t("main.spaceNear.description")}</p>
          </div>
          <div className="sliderButtons">
            <div
              className="nextButton sliderButton"
              onClick={translate.bind(null, "left")}>
              <ArrowSVG />
            </div>
            <div
              className="prevButton sliderButton"
              onClick={translate.bind(null, "right")}>
              <ArrowSVG />
            </div>
          </div>
        </div>
        <div className="slider">
          {/* <div className="pageHolder" id="pageHolder">
            {cardData.reduce((acc,i,ind)=>{
              if(ind%6==0){
                acc.push([])
              }
              acc[Math.floor(ind/6)].push(i)
              return acc
            },[]).map((item, ind)=>{
              return <div key={ind} className="page">
                {item.map((data,ind)=>{
                  return <SpaceCard key={ind}  data={data}></SpaceCard>
                })}
              </div>
            })}
          </div> */}
          <div className="pageHolder" id="pageHolder">
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className="page">
                {page.map((data, itemIndex) => (
                  <SpaceCard key={itemIndex} data={data} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export { Explore };
