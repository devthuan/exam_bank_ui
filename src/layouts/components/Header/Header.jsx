import className from "classnames/bind";
import styles from "./Header.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Row, Stack, Button, Form, DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const cx = className.bind(styles);
const Header = () => {
  return (
    <Container className={cx("wrapper")}>
      <Row className={cx("row__header")}>
        <Stack direction="horizontal" gap={3}>
          <div className="p-2 ms-auto">
            <Form.Control
              className="me-auto"
              placeholder="Add your item here..."
            />
          </div>
          <div className="p-2 ms-auto">hello: user</div>
          <div className="vr" />
          <div className="p-2">
            <div className={cx("box__avatar")}>
              <Dropdown>
                <Dropdown.Toggle
                  className={cx("custom-dropdown-toggle")}
                  variant="none"
                  id="dropdown-basic"
                >
                  <FontAwesomeIcon
                    className={cx("avatar__icon")}
                    icon={faUser}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Stack>
      </Row>
    </Container>
  );
};

export default Header;
