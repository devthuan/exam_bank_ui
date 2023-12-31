import className from "classnames/bind";
import styles from "./Header.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faMoneyBill,
  faClock,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Stack,
  Button,
  Form,
  DropdownButton,
  InputGroup,
} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const cx = className.bind(styles);
const Header = () => {
  return (
    <Container className={cx("wrapper")}>
      <Row className={cx("row__header")}>
        <Stack direction="horizontal" gap={3}>
          <div className="p-2 ms-auto">
            <div className={cx("box_search")}>
              <Form.Control
                size="lg"
                className={cx("input_search")}
                placeholder="Tìm kiếm theo tên môn học"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="text"
              />
              <FontAwesomeIcon
                className={cx("icon_search")}
                icon={faMagnifyingGlass}
              />
            </div>
          </div>
          <div className="p-2 ms-auto">1 VND</div>
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
                  <Dropdown.Item className={cx("item_dropdown")} href="#/action-1">
                    <FontAwesomeIcon
                      className={cx("icon_dropdown")}
                      icon={faUser}
                    />
                    Tài khoản
                  </Dropdown.Item>
                  <Dropdown.Item className={cx("item_dropdown")} href="#/action-2">
                    <FontAwesomeIcon
                      className={cx("icon_dropdown")}
                      icon={faMoneyBill}
                    />
                    Nạp tiền
                  </Dropdown.Item>
                  <Dropdown.Item className={cx("item_dropdown")} href="#/action-3">
                    <FontAwesomeIcon
                      className={cx("icon_dropdown")}
                      icon={faClock}
                    />
                    Lịch sử
                  </Dropdown.Item>
                  <Dropdown.Item className={cx("item_dropdown")} href="#/action-3">
                    <FontAwesomeIcon
                      className={cx("icon_dropdown")}
                      icon={faRightFromBracket}
                    />
                    Đăng xuất
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
