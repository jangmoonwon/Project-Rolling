import { Layout } from "layout/Layout";
import { Link } from "react-router-dom";
import styles from "./ListPage.module.scss";
import classNames from "classnames/bind";
import { CardSlider } from "sharing";
import { testRecipientsData } from "../../sharing/CardSlider/testdata";

const cx = classNames.bind(styles);

export const ListPage = () => {
  return (
    <Layout isHiddenButton={false}>
      <div className={cx("container")}>
        <div className={cx("rolling-wrapper")}>
          <p className={cx("title")}>인기 롤링 페이퍼 🔥</p>
          <CardSlider recipients={testRecipientsData} />
        </div>
        <div className={cx("rolling-wrapper")}>
          <p className={cx("title")}>최근에 만든 롤링 페이퍼 ⭐</p>
          <CardSlider recipients={testRecipientsData} />
        </div>
        <Link className={cx("link-button")} to="/post">
          <div className={cx("link-button-style")}>만들어보기</div>
        </Link>
      </div>
    </Layout>
  );
};
