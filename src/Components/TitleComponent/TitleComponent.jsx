import React from "react";
import classNames from "classnames/bind";
import styles from "./TitleComponent.module.scss";
import { Container, Row } from "react-bootstrap";

const cx = classNames.bind(styles);

const TitleComponent = ({ title }) => {
  return (
    <Container>
      <Row>
        <h1  className={cx("title")}>
          {title}
        </h1>
      </Row>
    </Container>
  );
};

export default TitleComponent;
