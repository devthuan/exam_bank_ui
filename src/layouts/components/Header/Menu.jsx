import className from "classnames/bind";
import styles from "./Header.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMoneyBill,
  faClock,
  faRightFromBracket,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Nav, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";

const cx = className.bind(styles);
const Menu = () => {
  // Tạo một hàm xử lý sự kiện khi click vào phần tử
  const handleClick = (event, itemId) => {
    event.preventDefault();

    // Tìm phần tử trong DOM dựa vào itemId
    const targetElement = document.getElementById(itemId);
    console.log(targetElement);

    // Nếu phần tử tồn tại, thì thực hiện cuộn đến vị trí của nó
    if (targetElement) {
      const targetRect = targetElement.getBoundingClientRect();
      const offsetTop = targetRect.top + window.scrollY;
      const offsetHeight = targetRect.height;
      const middleOfElement = offsetTop + offsetHeight / 2;

      window.scrollTo({
        top: middleOfElement - window.innerHeight / 2,
        behavior: "smooth",
      });
    }
  };

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
              <NavLink onClick={(event) => handleClick(event, "university")}>
                Đại học
              </NavLink>
              <NavLink to="/document">Tài liệu</NavLink>
            </Nav>
          </Container>

          <div className={cx("nav__user")}>
            <NavLink to={"/login"}>
            <FontAwesomeIcon
              className={cx("icon__login")}
              icon={faRightToBracket}
              fade
            />

            </NavLink>
            {/* <div className="">1 VND</div>
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
            </div> */}
          </div>
        </Navbar>
      </Row>
    </Container>
  );
};

export default Menu;
