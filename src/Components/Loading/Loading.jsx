import classNames from "classnames/bind";
import styles from "./Loading.module.scss";
import { Container } from "react-bootstrap";

const cx = classNames.bind(styles);

const Loading = () => {
  return (
    <Container className={cx("container")}>
      <div className={cx("spinner")}></div>
    </Container>
  );
};

export default Loading;
