import styles from "./SlideArrow.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className={cx("arrow", "right")} onClick={onClick}>
      <img src="../images/arrow_right.svg" alt="다음 카드 넘기기 버튼" />
    </div>
  );
}

export function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={cx("arrow", "left")} onClick={onClick}>
      <img src="../images/arrow_left.svg" alt="이전 카드 넘기기 버튼" />
    </div>
  );
}
