import className from "classnames/bind";
import styles from "./Major.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button } from "react-bootstrap";

import TitleComponent from "../../Components/TitleComponent/TitleComponent";
import { NavLink, useParams } from "react-router-dom";
import Logo from "../../assets/images/logo_sgu.jpg";

const cx = className.bind(styles);
const Major = () => {
  const { nameUni } = useParams();

  const listMajor = [
    { id: 1, major: "Công nghệ thông tin", logo: Logo, numSubject: 5 },
    { id: 2, major: "Sư phạm tiểu học", logo: Logo, numSubject: 5 },
    { id: 3, major: "Y đa khoa", logo: Logo, numSubject: 5 },
  ];

  return (
    <Container className={cx("container")}>
      <Row className={cx("content")}>
        <TitleComponent title={`${nameUni} /  Chuyên ngành`} />
      </Row>
      <Row>
        <Row xs="auto" className="justify-content-md-center">
          {listMajor &&
            listMajor.length > 0 &&
            listMajor.map((item, index) => (
              <div key={index} className={cx("box__document")}>
                <Col md={2}>
                  <div className={cx("logo")}>
                    <img
                      className={cx("img__logo")}
                      src={item.logo}
                      alt="image"
                    />
                  </div>
                </Col>
                <Col md={7}>
                  <h2 className={cx("title__document")}>
                    Chuyên ngành {item.major}
                  </h2>
                  <p className={cx("name__document")}>
                    Số môn học có tài liệu: {item.numSubject}
                  </p>
                </Col>
                <Col md={3}>
                  <div className="box__btn">
                    <NavLink to={`/major/${nameUni}/${item.major}`}>
                      <Button className={cx("btn__document")}>Xem ngay</Button>
                    </NavLink>
                  </div>
                </Col>
              </div>
            ))}
        </Row>
      </Row>
    </Container>
  );
};

export default Major;
