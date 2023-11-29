import className from "classnames/bind";
import styles from "./Banner.module.scss";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFolder } from "@fortawesome/free-solid-svg-icons";
import Animation from "../../../../assets/images/Online-learning.gif";

const cx = className.bind(styles);
const Banner = () => {
  return (
    <Container fluid={false} className={cx("container")} data-bs-theme="light">
      <Row>
        <Col sm={5}>
          <div className={cx("banner__left")}>
            <h1 className={cx("banner__left-title")}>Welcome to you.</h1>
            <p className={cx("banner__left-description")}>
              website cung cấp các đề chi tiết là chính xác nhất.
            </p>
          </div>
        </Col>
        <Col sm={7}>
          <div className={cx("banner__right")}>
            <img src={Animation} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
