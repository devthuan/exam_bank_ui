import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import SideBar from "../components/SideBar/SideBar";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header/Header";

const cx = classNames.bind(styles);
const DefaultLayout = () => {
  return (
    <Container fluid>
      <Row className="vh-100">
        <Col sm={2}>
          <SideBar />
        </Col>
        <Col sm={10}>
          <Row>
            <Row>
              <Header />
            </Row>
            <Row>
              ádfasdf
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultLayout;
