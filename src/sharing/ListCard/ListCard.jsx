import { useEffect, useState } from "react";
import { CountVisitor, SortedEmojis } from "sharing";
import { colorImage } from "./constants";
import { useNavigate } from "react-router-dom";
import styles from "./ListCard.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const ListCard = ({
  name,
  recentMessages,
  messageCount,
  topReactions,
  backgroundColor,
  backgroundImageURL,
  id,
}) => {
  const [backgroundURL, setBackgroundURL] = useState("");
  const navigate = useNavigate();

  const navigateToPostPage = (id) => {
    navigate(`/post/${id}`);
  };

  const getBackgroundImages = () => {
    const URL = backgroundImageURL
      ? backgroundImageURL
      : colorImage[backgroundColor];
    setBackgroundURL(URL);
  };

  useEffect(() => {
    getBackgroundImages();
  });

  return (
    <div
      className={cx("card-container", backgroundImageURL ? "image" : "color")}
      onClick={() => navigateToPostPage(id)}
    >
      <div className={cx("background")}>
        <img src={backgroundURL} alt="background" />
      </div>
      <div className={cx("text-container")}>
        <div className={cx("card-header")}>
          <p className={cx("name")}>To. {name}</p>
          <CountVisitor
            recentMessages={recentMessages}
            messageCount={messageCount}
          />
          <div className={cx("message-count")}>
            <span>{messageCount}</span>명이 작성했어요!
          </div>
        </div>
        <div className={cx("card-footer")}>
          <div className={cx("rectangle")}></div>
          <SortedEmojis topReactions={topReactions} />
        </div>
      </div>
    </div>
  );
};
