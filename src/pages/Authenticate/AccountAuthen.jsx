import className from "classnames/bind";
import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Row,  Button, Form } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const cx = className.bind(styles);
const AccountAuthen = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      className={cx("form__login")}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <h2 className={cx("form__title", "mb-5")}>Xác thực tài khoản</h2>
      <Row>
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>Mã xác thực</Form.Label>
          <Form.Control
            size="lg"
            className={cx("input")}
            required
            type="text"
            placeholder="Mã xác thực"
          />
          <Form.Control.Feedback type="invalid">
            Vui lòng nhập mã xác thực
          </Form.Control.Feedback>
        </Form.Group>
      <Form.Label className="mb-4">Mã xác gồm 6 số đượcc gửi qua email mà bạn đã đăng ký</Form.Label>
      </Row>
      <div className={cx("box__center")}>
        <Button className={cx("mb-5", "btn__authen")} type="submit">
          Xác nhận
        </Button>
      </div>
    </Form>
  );
};

export default AccountAuthen;
