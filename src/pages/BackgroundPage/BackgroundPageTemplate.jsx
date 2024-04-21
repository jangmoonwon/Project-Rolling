import { useState } from "react";
import styles from "./BackgroundPage.module.scss";
import classNames from "classnames/bind";
import { Layout } from "layout/Layout";
import { NameInput, Wallpaper, CreateButton } from "sharing";
import { IMAGE_TEST1, IMAGE_TEST2, IMAGE_TEST3, IMAGE_TEST4 } from "./constant";
// import { createRecipient } from "util";
const cx = classNames.bind(styles);

export const BackgroundPage = () => {
  const [recipientName, setRecipientName] = useState("");
  const [userColor, setuserColor] = useState("clickButton");
  const [userImage, setUserImage] = useState("button");
  const [selectedColorId, setSelectedColorId] = useState(0);
  const [selectedImageId, setSelectedImageId] = useState(null);

  const color = ["beige", "purple", "blue", "green"];
  const image = [IMAGE_TEST1, IMAGE_TEST2, IMAGE_TEST3, IMAGE_TEST4];

  /** onSubmit console 테스트 */
  const handleSubmit = (event) => {
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

    console.log(`recipientName : ${recipientName}`);
    console.log(`backgroundColor : ${selectedColor}`);
    console.log(`backgroundImageURL : ${selectedImage}`);
    //createRecipient(recipientName, selectedColor, selectedImage);
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
            setuserColor,
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

        <CreateButton />
      </form>
    </Layout>
  );
};
