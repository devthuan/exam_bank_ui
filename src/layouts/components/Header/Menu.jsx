import className from "classnames/bind";
import styles from "./Header.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMoneyBill,
  faClock,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  Row,
  Nav,
  Navbar,
} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";

const cx = className.bind(styles);
const Menu = () => {
  return (
    <Container className={cx("wrapper")}>
      <Row className={cx("row__header")}>
        <Navbar bg="light" data-bs-theme="light">
          <Container className={cx("nav__content")}>
            <div className="logo">
              <Navbar.Brand>Exam Bank</Navbar.Brand>
            </div>

            <Nav className={cx("nav")}>
              <NavLink to="/">Trang chủ</NavLink>
              <Nav.Link href="/#university">
                <NavLink >Đại học</NavLink>
              </Nav.Link>
              <NavLink to="/document">Tài liệu</NavLink>
            </Nav>
          </Container>
          <div className={cx("nav__user")}>
            <div className="">1 VND</div>
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

                <Dropdown.Menu align={"end"}>
                  <Dropdown.Item
                    className={cx("item_dropdown")}
                    href="#/action-1"
                  >
                    <FontAwesomeIcon
                      className={cx("icon_dropdown")}
                      icon={faUser}
                    />
                    Tài khoản
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={cx("item_dropdown")}
                    href="#/action-2"
                  >
                    <FontAwesomeIcon
                      className={cx("icon_dropdown")}
                      icon={faMoneyBill}
                    />
                    Nạp tiền
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={cx("item_dropdown")}
                    href="#/action-3"
                  >
                    <FontAwesomeIcon
                      className={cx("icon_dropdown")}
                      icon={faClock}
                    />
                    Lịch sử
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={cx("item_dropdown")}
                    href="#/action-3"
                  >
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
        </Navbar>
      </Row>
    </Container>
  );
};

export default Menu;
