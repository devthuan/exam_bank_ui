import classNames from "classnames/bind";
import styles from "./ExamLayout.module.scss";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";


const cx = classNames.bind(styles);
const ExamLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>{children}</Row>
    </Container>
  );
};

export default ExamLayout;
