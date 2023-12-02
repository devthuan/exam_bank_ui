import className from "classnames/bind";
import styles from "./University.module.scss";

import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFolder } from "@fortawesome/free-solid-svg-icons";
import LogoUni from "../../../../assets/images/logo_sgu.jpg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const cx = className.bind(styles);
const University = () => {
  const listUniversity = [
    { id: 1, name: "Đại học Sài Gòn", logo: LogoUni },
    { id: 2, name: "Đại học Bách Khoa", logo: LogoUni },
    { id: 3, name: "Đại học Việt Hàn", logo: LogoUni },
    { id: 4, name: "Đại học Y Huế", logo: LogoUni },
    { id: 5, name: "Đại học Y Huế", logo: LogoUni },
  ];



  return (
    <Container fluid={false} className={cx("container")}>
      <Row>
        <Col>
          <h1 className={cx("title")}>Trường đại học</h1>
        </Col>
      </Row>
      <Row id="university" xs="auto" className={cx("row__university")}>
        {listUniversity &&
          listUniversity.map((item, index) => (
            <Col className={cx("col")} key={index}>
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
