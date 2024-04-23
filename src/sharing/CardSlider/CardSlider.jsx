import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ListCard, NextArrow, PrevArrow } from "sharing";
import styles from "./CardSlider.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function CardSlider({ recipients }) {
  const [currentSlide, setcurrenSlide] = useState(0);
  const length = recipients.length;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: (currentSlide) => {
      setcurrenSlide(currentSlide);
      console.log(currentSlide);
    },
    nextArrow: currentSlide === length - 4 ? null : <NextArrow />,
    prevArrow: currentSlide === 0 ? null : <PrevArrow />,
    responsive: [
      {
        breakpoint: 1249,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {length >= 5 && (
        <Slider {...settings}>
          {recipients.map((rec, i) => {
            return (
              <ListCard
                key={i}
                id={rec.id}
                name={rec.name}
                recentMessages={rec.recentMessages}
                messageCount={rec.messageCount}
                topReactions={rec.topReactions}
                backgroundColor={rec.backgroundColor}
                backgroundImageURL={rec.backgroundImageURL}
              />
            );
          })}
        </Slider>
      )}
      {length < 5 && (
        <div className={cx("grid-container")}>
          {recipients.map((rec, i) => {
            return (
              <ListCard
                key={i}
                id={rec.id}
                name={rec.name}
                recentMessages={rec.recentMessages}
                messageCount={rec.messageCount}
                topReactions={rec.topReactions}
                backgroundColor={rec.backgroundColor}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
