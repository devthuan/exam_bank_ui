import className from "classnames/bind";
import styles from "./Result.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClock,
  faCircleCheck,
  faCircleXmark,
  faCircleInfo,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button, Card } from "react-bootstrap";

import TitleComponent from "../../Components/TitleComponent/TitleComponent";
import { NavLink, useParams } from "react-router-dom";
import Logo from "../../assets/images/logo_sgu.jpg";

const cx = className.bind(styles);
const Result = () => {
  const { nameUni, nameMajor } = useParams();
  console.log(nameUni, nameMajor);

  return (
    <Container className={cx("container")}>
      <Row className={cx("title")}>
        <NavLink>
          <TitleComponent title={`< Quay lại`} />
        </NavLink>
      </Row>
      <Row className={cx("content")}>
        <Card className={cx("content__card")}>
          <Card.Body>
            <Card.Title className={cx("title")}>
              Bài làm của bạn đã được gửi đi
            </Card.Title>
            <Card.Title className={cx("title", "score")}>
              Điểm của bạn :{" "}
            </Card.Title>
            <Row>
              <Col className={cx("content__title")}>
                <Card.Title>
                  <FontAwesomeIcon
                    className={cx("title__icon")}
                    icon={faUser}
                  />
                  Thí sinh
                </Card.Title>
                <Card.Title>
                  <FontAwesomeIcon
                    className={cx("title__icon")}
                    icon={faClock}
                  />
                  Thời gian làm bài
                </Card.Title>
                <Card.Title>
                  <FontAwesomeIcon
                    className={cx("title__icon", "answer__exactly")}
                    icon={faCircleCheck}
                  />
                  Số câu trắc nghiệm đúng
                </Card.Title>
                <Card.Title>
                  <FontAwesomeIcon
                    className={cx("title__icon", "answer__wrong")}
                    icon={faCircleXmark}
                  />
                  Số câu trắc nghiệm sai
                </Card.Title>
                <Card.Title>
                  <FontAwesomeIcon
                    className={cx("title__icon")}
                    icon={faCircleInfo}
                  />
                  Tổng số câu trong đề
                </Card.Title>
              </Col>
              <Col className={cx("content__result")}>
                <Card.Title>Trần Phước Thuận</Card.Title>
                <Card.Title>1 giờ 7 phút</Card.Title>
                <Card.Title className={cx("answer__exactly")}>15</Card.Title>
                <Card.Title className={cx("answer__wrong")}>35</Card.Title>
                <Card.Title>50</Card.Title>
              </Col>
            </Row>
            <Row>
              <Button className={cx("btn__result")}>
                <NavLink to={"/answer"} className={cx("btn__result-text")}>
                  Xem đáp án
                  <FontAwesomeIcon
                    className={cx("btn__result-icon")}
                    icon={faChevronRight}
                  />
                </NavLink>
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Result;
