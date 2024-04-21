import { Layout } from "layout/Layout";
import { Link } from "react-router-dom";
import styles from "./ListPage.module.scss";
import classNames from "classnames/bind";
import { CardSlider } from "sharing";
import { useEffect, useState } from "react";
import { getRecipients } from "util";

const cx = classNames.bind(styles);

export const ListPage = () => {
  const [recipientsSortedByReaction, setRecipientsSortedByReaction] = useState(
    []
  );
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    const fetchRecipient = async () => {
      const recipients = await getRecipients(undefined, undefined, "like");
      setRecipientsSortedByReaction(recipients);
    };
    fetchRecipient();
  }, []);

  useEffect(() => {
    const fetchRecipient = async () => {
      const recipients = await getRecipients();
      setRecipients(recipients);
    };
    fetchRecipient();
  }, []);

  return (
    <Layout isHiddenButton={false}>
      <div className={cx("container")}>
        <div className={cx("rolling-wrapper")}>
          <p className={cx("title")}>인기 롤링 페이퍼 🔥</p>
          <CardSlider recipients={recipientsSortedByReaction} />
        </div>
        <div className={cx("rolling-wrapper")}>
          <p className={cx("title")}>최근에 만든 롤링 페이퍼 ⭐</p>
          <CardSlider recipients={recipients} />
        </div>
        <Link className={cx("link-button")} to="/post">
          <div className={cx("link-button-style")}>만들어보기</div>
        </Link>
      </div>
    </Layout>
  );
};
