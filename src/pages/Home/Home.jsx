import className from "classnames/bind";
import styles from "./Home.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faMoneyBill,
  faClock,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import LogoSGU from "../../assets/images/logo_sgu.jpg";
import Banner from "./components/Banner/Banner";
import University from "./components/University/University";

const cx = className.bind(styles);
const Home = () => {
  return (
    <Container className={cx("container")}>
      <Row className={cx("content")}>
        <Banner />
        <University />
      </Row>
    </Container>
  );
};

export default Home;
