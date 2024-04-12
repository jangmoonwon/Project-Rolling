import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";
import { Layout } from "layout/Layout";
import { CARD_IMAGE, EMOJI_IMAGE } from "./constant";

const cx = classNames.bind(styles);

export const HomePage = () => {
  return (
    <Layout>
      <div className={cx("container")}>
        <article className={cx("content-box")}>
          <section className={cx("content")}>
            <span className={cx("label")}>Point. 01</span>
            <h2 className={cx("title")}>
              누구나 손쉽게, 온라인
              <br /> 롤링 페이퍼를 만들 수 있어요
            </h2>
            <p className={cx("description")}>로그인 없이 자유롭게 만들어요.</p>
            <img
              className={cx("content-image")}
              src={CARD_IMAGE}
              alt="카드리스트 이미지"
            />
          </section>
          <section className={cx("content")}>
            <span className={cx("label")}>Point. 02</span>
            <h2 className={cx("title")}>
              서로에게 이모지로 감정을
              <br /> 표현해보세요
            </h2>
            <p className={cx("description")}>로그인 없이 자유롭게 만들어요.</p>
            <img
              className={cx("content-image")}
              src={EMOJI_IMAGE}
              alt="카드리스트 이미지"
            />
          </section>
        </article>
        <div className={cx("button-box")}>
          <button className={cx("button")}>구경해보기</button>
        </div>
      </div>
    </Layout>
  );
};
