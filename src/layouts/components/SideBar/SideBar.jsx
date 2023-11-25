import className from "classnames/bind";
import styles from "./SideBar.module.scss";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Row, Stack } from "react-bootstrap";

const cx = className.bind(styles);
const SideBar = () => {
  return (
    <>
      <Container className="vh-100 bg-primary text-light" data-bs-theme="light">
        <Row>
          <Navbar>
            <Container>
              <Navbar.Brand href="#home">Logo</Navbar.Brand>
            </Container>
          </Navbar>
        </Row>
        <Row>
          <Navbar>
            <Container>
              <Navbar.Brand href="#home">Logo</Navbar.Brand>
            </Container>
          </Navbar>
        </Row>
        <Row>
          <Navbar>
            <Container>
              <Navbar.Brand href="#home">Logo</Navbar.Brand>
            </Container>
          </Navbar>
        </Row>
        <Row>
          <Navbar>
            <Container>
              <Navbar.Brand href="#home">Logo</Navbar.Brand>
            </Container>
          </Navbar>
        </Row>
      </Container>
    </>
  );
};

export default SideBar;
