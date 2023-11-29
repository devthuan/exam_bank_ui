import className from "classnames/bind";
import styles from "./Footer.module.scss";

import Container from "react-bootstrap/Container";


const cx = className.bind(styles);
const Footer = () => {
  return (
    <Container fluid={false} className={cx("wrapper")}>
        <p className={cx("footer")}>
          Copyright @ oshi
        </p>
    </Container>
  );
};

export default Footer;
