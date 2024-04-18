import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./BackgroundPage.module.scss";
import classNames from "classnames/bind";
import { Layout } from "layout/Layout";
import { NameInput } from "sharing/NameInput/NameInput";
import { Wallpaper } from "sharing/Wallpaper/Wallpaper";
import { CreateButton } from "sharing/CreateButton/CreateButton";
import { getBackgroundImages } from "util/api/getBackgroundImages";
import { createRecipient } from "util";

const cx = classNames.bind(styles);

export const BackgroundPage = () => {
  const [backgroundAllImage, setBackgroundAllImage] = useState([]);
  const [recipientName, setRecipientName] = useState("");
  const [userColor, setUserColor] = useState("clickButton");
  const [userImage, setUserImage] = useState("button");
  const [selectedColorId, setSelectedColorId] = useState(0);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [data, setData] = useState([]);

  const color = ["beige", "purple", "blue", "green"];
  const image = [...backgroundAllImage];
  const TestData = data.id;

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

  const handleSubmit = async (event) => {
    // 새로고침 방지
    event.preventDefault();

    const defaultColor = "beige";
    const defaultImage = "";
    const selectedColor = color[selectedColorId]
      ? color[selectedColorId]
      : defaultColor;
    const selectedImage = image[selectedImageId]
      ? image[selectedImageId]
      : defaultImage;

    const test = await createRecipient(
      recipientName,
      selectedColor,
      selectedImage
    );

    setData(test);
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

        <Link to={`/post/${data.id}`}>
          <CreateButton userName={recipientName} />
        </Link>
      </form>
    </Layout>
  );
};
