import styles from "./Cards.module.scss";
import classNames from "classnames/bind";
import { CHECK_ICON } from "./constant";

const cx = classNames.bind(styles);

/** 배경화면으로 제공되는 컬러 또는 이미지 */
export const Cards = ({ allColors, allImages, color, image }) => {
  const { userColor, selectedColorId, setSelectedColorId } = allColors;
  // eslint-disable-next-line no-unused-vars
  const { selectedImageId, setSelectedImageId } = allImages;

  const handleColorClick = (i) => {
    setSelectedColorId(i);
  };

  const handleImageClick = (i) => {
    setSelectedImageId(i);
  };

  const CardList = () => {
    if (userColor === "clickButton") {
      return (
        <>
          {color.map((item, i) => {
            return (
              <div key={i} className={cx("cardBlock")}>
                <button
                  className={cx("colorButton", item)}
                  type="button"
                  onClick={() => handleColorClick(i)}
                ></button>
                {selectedColorId === i && (
                  <button>
                    <img
                      className={cx("icon")}
                      src={CHECK_ICON}
                      alt="선택 아이콘"
                    />
                  </button>
                )}
              </div>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          {image.map((item, i) => {
            return (
              <div key={i} className={cx("cardBlock")}>
                <button
                  className={cx("imageButton", item)}
                  type="button"
                  onClick={() => handleImageClick(i)}
                >
                  <img
                    className={cx("image")}
                    style={{ opacity: selectedImageId === i ? 0.5 : 1 }}
                    src={item}
                    alt="배경화면 선택 이미지"
                  />
                </button>
                {selectedImageId === i && (
                  <button>
                    <img
                      className={cx("icon")}
                      src={CHECK_ICON}
                      alt="선택 아이콘"
                    />
                  </button>
                )}
              </div>
            );
          })}
        </>
      );
    }
  };

  return (
    <div className={cx("container")}>
      <CardList />
    </div>
  );
};
