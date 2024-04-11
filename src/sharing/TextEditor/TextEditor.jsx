import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./TextEditor.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const TextEditor = ({ value, setValue }) => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ align: [] }, { indent: "-1" }, { indent: "+1" }],
      [{ list: "bullet" }, { list: "ordered" }],
      [{ color: [] }, { background: [] }],
    ],
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "align",
    "indent",
    "list",
    "color",
    "background",
  ];

  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>내용을 입력해 주세요</h2>
      <ReactQuill
        className="editorTest"
        style={{ height: "340px" }}
        theme="snow"
        value={value}
        modules={modules}
        formats={formats}
        onChange={setValue}
        placeholder="I am your reach text editor."
      />
    </div>
  );
};
