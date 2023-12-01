import classNames from "classnames/bind";
import styles from "./AuthenticateLayout.module.scss";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

const cx = classNames.bind(styles);
const AuthenticateLayout = ({ children }) => {
  return (
    <Container className={cx("container")}>
      <Row>
        {children}
      </Row>
    </Container>
  );
};

export default AuthenticateLayout;
