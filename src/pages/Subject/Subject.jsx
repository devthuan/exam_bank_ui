import className from "classnames/bind";
import styles from "./Subject.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button } from "react-bootstrap";

import TitleComponent from "../../Components/TitleComponent/TitleComponent";
import { NavLink, useParams } from "react-router-dom";
import Logo from "../../assets/images/logo_sgu.jpg";

const cx = className.bind(styles);
const Subject = () => {
  const { nameUni, nameMajor } = useParams();
  console.log(nameUni, nameMajor);

  const listSubject = [
    { id: 1, subject: "lý thuyết đồ thị", logo: Logo, numSubject: 5 },
    { id: 2, subject: "Hệ điều hành", logo: Logo, numSubject: 5 },
    { id: 3, subject: "Lập trình hướng đối tượng", logo: Logo, numSubject: 5 },
  ];

  return (
    <Container className={cx("container")}>
      <Row className={cx("content")}>
        <TitleComponent title={`${nameUni} / ${nameMajor} / Môn Học`} />
      </Row>
      <Row>
        <Row xs="auto" className="justify-content-md-center">
          {listSubject &&
            listSubject.length > 0 &&
            listSubject.map((item, index) => (
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
                  <h2 className={cx("title__document")}>Môn {item.subject}</h2>
                  <p className={cx("name__document")}>
                    Số đề thi: {item.numSubject}
                  </p>
                </Col>
                <Col md={3}>
                  <div className="box__btn">
                    <NavLink
                      to={`/major/${nameUni}/${nameMajor}/${item.subject}`}
                    >
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

export default Subject;
