import React from "react";
import PrimaryButton from "./primaryButton";
import { useTranslation } from "react-i18next";
import HeartSVG from "../SVGs/HeartSVG";
import HeartFillSVG from "../SVGs/HeartFillSVG"
import star from "../../assets/star.png"
interface SpaceCardProps {
  data: {
    category: string;
    name: string;
    price: number;
    rating: number;
    image: string;
    liked:boolean
  };
}

const SpaceCard: React.FC<SpaceCardProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="card">
      <div className={`like ${data.liked?"true":"false"}`}>
        {data.liked?<HeartFillSVG></HeartFillSVG>:<HeartSVG></HeartSVG>}
      </div>
      <div className="imageWrapper">
        <img className="image" src={data.image} alt="" />
      </div>
      <div className="description">
        <div className="topRow">
        <div className="category">{data.category}</div>
        <div className="rateing">
          <img src={star} alt="" />
          {data.rating}</div>
        </div>
        <div className="name">{data.name}</div>
        <div className="more">
        <div className="price">
          ${data.price}
          <span className="hours">/{t("main.spaceNear.slider.price")}</span>
        </div>
        <PrimaryButton className="button">{t("main.spaceNear.slider.details")}</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
