import className from "classnames/bind";
import styles from "./University.module.scss";

import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFolder } from "@fortawesome/free-solid-svg-icons";
import LogoUni from "../../../../assets/images/logo_sgu.jpg";

const cx = className.bind(styles);
const University = () => {
  return (
    <Container fluid={false} className={cx("container")} data-bs-theme="light">
      <Row>
        <Col>
          <h1 className={cx("title")}>Trường đại học</h1>
        </Col>
      </Row>
      <Row xs="auto" className="justify-content-md-center">
        <Col>
          <div className={cx("box__university")}>
            <img className={cx("img_uni")} src={LogoUni} />
            <h2 className={cx("name__uni")}>Trường đại học Sài Gòn</h2>

            <Button className={cx("btn__uni")}>Xem ngay</Button>
          </div>
        </Col>
        <Col>
          <div className={cx("box__university")}>
            <img className={cx("img_uni")} src={LogoUni} />
            <h2 className={cx("name__uni")}>Trường đại học Sài Gòn</h2>

            <Button className={cx("btn__uni")}>Xem ngay</Button>
          </div>
        </Col>
        <Col>
          <div className={cx("box__university")}>
            <img className={cx("img_uni")} src={LogoUni} />
            <h2 className={cx("name__uni")}>Trường đại học Sài Gòn</h2>

            <Button className={cx("btn__uni")}>Xem ngay</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default University;
