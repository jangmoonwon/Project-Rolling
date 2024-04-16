import { useState, useEffect } from "react";
import styles from "./BackgroundPage.module.scss";
import classNames from "classnames/bind";
import { Layout } from "layout/Layout";
import { NameInput } from "sharing/NameInput/NameInput";
import { Wallpaper } from "sharing/Wallpaper/Wallpaper";
import { CreateButton } from "sharing/CreateButton/CreateButton";

import { getBackgroundImages } from "util/api/getBackgroundImages";

const cx = classNames.bind(styles);

export const BackgroundPage = () => {
  const [backgroundAllImage, setBackgroundAllImage] = useState([]);

  async function fetchImages() {
    try {
      const { imageUrls } = await getBackgroundImages();
      setBackgroundAllImage(imageUrls);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  const [recipientName, setRecipientName] = useState("");
  const [userColor, setUserColor] = useState("clickButton");
  const [userImage, setUserImage] = useState("button");
  const [selectedColorId, setSelectedColorId] = useState(0);
  const [selectedImageId, setSelectedImageId] = useState(null);

  const color = ["beige", "purple", "blue", "green"];
  const image = [...backgroundAllImage];

  /** onSubmit console 테스트 */
  const handleSubmit = (event) => {
    // 새로고침 방지
    event.preventDefault();

    console.log(`recipientName : ${recipientName}`);
    console.log(`backgroundColor : ${color[selectedColorId]}`);
    console.log(`backgroundImageURL : ${image[selectedImageId]}`);
  };

  return (
    <Layout isHiddenButton={true}>
      <form className={cx("container")} onSubmit={handleSubmit}>
        <NameInput
          value={recipientName}
          setValue={setRecipientName}
          title={"To."}
          text={"받는 사람 "}
        />
        <Wallpaper
          allColors={{
            userColor,
            setUserColor,
            selectedColorId,
            setSelectedColorId,
          }}
          allImages={{
            userImage,
            setUserImage,
            selectedImageId,
            setSelectedImageId,
          }}
          color={color}
          image={image}
        />

        <CreateButton userName={recipientName} />
      </form>
    </Layout>
  );
};
