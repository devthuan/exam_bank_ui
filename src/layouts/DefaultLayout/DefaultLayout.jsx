import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Menu from "../components/Header/Menu";
import Footer from "../components/Footer/Footer";

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Menu />
      </Row>
      <Row>{children}</Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default DefaultLayout;
