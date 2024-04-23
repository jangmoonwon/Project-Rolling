import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BackgroundPage.module.scss";
import classNames from "classnames/bind";
import { Layout } from "layout/Layout";
import { NameInput, Wallpaper, CreateButton } from "sharing";
import { getBackgroundImages, createRecipient } from "util";

const cx = classNames.bind(styles);

export const BackgroundPage = () => {
  const [backgroundAllImage, setBackgroundAllImage] = useState([]);
  const [recipientName, setRecipientName] = useState("");
  const [userColor, setUserColor] = useState("click-button");
  const [userImage, setUserImage] = useState("button");
  const [selectedColorId, setSelectedColorId] = useState(0);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const navigate = useNavigate();

  const color = ["beige", "purple", "blue", "green"];
  const image = [...backgroundAllImage];

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

    createRecipient(recipientName, selectedColor, selectedImage)
      .then((responseData) => {
        navigate(`/post/${responseData.id}`); // 성공적으로 메시지를 생성한 후에 경로 이동
      })
      .catch((error) => {
        console.error("Message creation failed:", error);
      });
  };

  return (
    <Layout isHiddenButton={true} isDisplay={true}>
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
