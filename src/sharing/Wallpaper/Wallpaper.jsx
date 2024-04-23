import styles from "./Wallpaper.module.scss";
import classNames from "classnames/bind";
import { Cards } from "../WallpaperCards/Cards";

const cx = classNames.bind(styles);

/** 컬러 또는 이미지 선택 상자 */
export const Wallpaper = ({ allColors, allImages, color, image }) => {
  const { userColor, setUserColor, selectedColorId, setSelectedColorId } =
    allColors;
  const { userImage, setUserImage, selectedImageId, setSelectedImageId } =
    allImages;

  const handleColorClick = () => {
    if (userColor === "button") {
      setUserColor("click-button");
      setUserImage("button");
      setSelectedColorId(0);
      setSelectedImageId(null);
    }
  };

  const handleImageClick = () => {
    if (userImage === "button") {
      setUserColor("button");
      setUserImage("click-button");
      setSelectedColorId(null);
      setSelectedImageId(0);
    }
  };

  return (
    <div className={cx("container")}>
      <div className={cx("text-block")}>
        <h1 className={cx("title")}>배경화면을 선택해 주세요.</h1>
        <h2 className={cx("text")}>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </h2>
      </div>

      <div className={cx("button-block")}>
        <button
          className={cx(userColor)}
          type="button"
          onClick={handleColorClick}
        >
          컬러
        </button>
        <button
          className={cx(userImage)}
          type="button"
          onClick={handleImageClick}
        >
          이미지
        </button>
      </div>

      <Cards
        allColors={{ userColor, selectedColorId, setSelectedColorId }}
        allImages={{ userImage, selectedImageId, setSelectedImageId }}
        color={color}
        image={image}
      />
    </div>
  );
};
