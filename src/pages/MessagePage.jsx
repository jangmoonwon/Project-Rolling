import { useState } from "react";
import styles from "./MessagePages.module.scss";
import classNames from "classnames/bind";
import { defaultImage, imageTest1, imageTest2 } from "./constant";
import { SenderInput } from "../sharing/Sender/SenderInput";
import { Profile } from "../sharing/Profile/Profile";
import { DropdownMenuBar } from "../sharing/DropdownMenuBar/DropdownMenuBar";
import { Button } from "../sharing/Button/Button";
import { TextEditor } from "../sharing/TextEditor/TextEditor";

const cx = classNames.bind(styles);

export const MessagePage = () => {
  const [sender, setSender] = useState("");
  const [profileImage, setProfileImage] = useState(defaultImage);
  const [relationship, setRelationship] = useState("지인");
  const [content, setContent] = useState("");
  const [font, setFont] = useState("Noto Sans");

  const profileImages = [imageTest1, imageTest2];
  const relationships = ["친구", "지인", "동료", "가족"];
  const Fonts = ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"];

  /** onSubmit console 테스트 */
  const handleSubmit = (event) => {
    // 새로고침 방지
    event.preventDefault();

    console.log(`sender : ${sender}`);
    console.log(`profileImage : ${profileImage}`);
    console.log(`relationship : ${relationship}`);
    console.log(`content : ${content}`);
    console.log(`font : ${font}`);
  };

  return (
    <>
      <form className={cx("container")} onSubmit={handleSubmit}>
        <SenderInput value={sender} setValue={setSender} />

        <Profile
          value={profileImage}
          setValue={setProfileImage}
          data={profileImages}
        />

        <DropdownMenuBar
          value={relationship}
          setValue={setRelationship}
          data={relationships}
          text="상대와의 관계"
        />

        <TextEditor value={content} setValue={setContent} />

        <div className={cx("marginTop")}>
          <DropdownMenuBar
            value={font}
            setValue={setFont}
            data={Fonts}
            text="폰트 선택"
          />
        </div>

        <Button />
      </form>
    </>
  );
};
