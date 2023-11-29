import className from "classnames/bind";
import styles from "./University.module.scss";

import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFolder } from "@fortawesome/free-solid-svg-icons";
import LogoUni from "../../../../assets/images/logo_sgu.jpg";
import { NavLink } from "react-router-dom";

const cx = className.bind(styles);
const University = () => {
  const listUniversity = [
    { id: 1, name: "Đại học Sài Gòn", logo: LogoUni },
    { id: 2, name: "Đại học Bách Khoa", logo: LogoUni },
    { id: 3, name: "Đại học Việt Hàn", logo: LogoUni },
  ];

  return (
    <Container fluid={false} className={cx("container")} data-bs-theme="light">
      <Row>
        <Col>
          <h1 id="university" className={cx("title")}>
            Trường đại học
          </h1>
        </Col>
      </Row>
      <Row xs="auto" className="justify-content-md-center">
        {listUniversity &&
          listUniversity.map((item, index) => (
            <Col key={index}>
              <div className={cx("box__university")}>
                <img
                  className={cx("img_uni")}
                  src={item.logo}
                  alt={item.name}
                />
                <h2 className={cx("name__uni")}>{item.name}</h2>
                <NavLink to={`/major/${item.name}`}>
                  <Button className={cx("btn__uni")}>Xem ngay</Button>

                </NavLink>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default University;
