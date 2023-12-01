import className from "classnames/bind";
import styles from "./Login.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import { Row, Button, Form } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const cx = className.bind(styles);
const Login = () => {
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
      <h2 className={cx("form__title")}>Đăng nhập</h2>
      <Row>
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            size="lg"
            className={cx("input")}
            required
            type="text"
            placeholder="Email"
            defaultValue="lmajkah@gmail.com"
          />
          <Form.Control.Feedback type="invalid">
            Vui lòng nhập enail của bạn
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3" controlId="validationCustom02">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            size="lg"
            required
            type="password"
            placeholder="Mật khẩu"
            defaultValue="."
          />
          <Form.Control.Feedback type="invalid">
            Vui lòng nhập mật khẩu của bạn
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-4">
        <Form.Check
          required
          label="Đồng ý với các điều khoản và điều kiện"
          feedback="Bạn phải đồng ý trước khi đăng nhập."
          feedbackType="invalid"
        />
      </Form.Group>
      <div className={cx("box__center")}>
        <Button className={cx("mb-5", "btn__login")} type="submit">
          Đăng nhập
        </Button>
        <Form.Group className="mb-3">
          <Form.Label className={cx("link__register")}>
            Bạn chưa có tài khoản ?<NavLink to={"/register"}>Đăng ký</NavLink>
          </Form.Label>
        </Form.Group>
        <Form.Group className={cx("mb-3", "btn__services")}>
          <Button className={cx("mb-3", "btn__api")} type="submit">
            Google
          </Button>
          <Button className={cx("mb-3", "btn__api")} type="submit">
            Facebook
          </Button>
        </Form.Group>
      </div>
    </Form>
  );
};

export default Login;
