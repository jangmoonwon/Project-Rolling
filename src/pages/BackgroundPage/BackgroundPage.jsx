import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./BackgroundPage.module.scss";
import classNames from "classnames/bind";
import { Layout } from "layout/Layout";
import { NameInput, Wallpaper, CreateButton } from "sharing";
import { getBackgroundImages } from "util";

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

  const handleSubmit = (event) => {
    // 새로고침 방지
    event.preventDefault();
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

        <Link to="/post/{id}">
          <CreateButton userName={recipientName} />
        </Link>
      </form>
    </Layout>
  );
};
