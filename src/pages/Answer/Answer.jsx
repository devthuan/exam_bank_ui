import className from "classnames/bind";
import styles from "./Answer.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button, Card, Form } from "react-bootstrap";

import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const cx = className.bind(styles);
const Answer = () => {
  const [toggle, setToggle] = useState(false);
  const listQuestion = useSelector((state) => state.test.data);

  const handleClickComment = () => {
    setToggle(!toggle);
  };

  return (
    <Container className={cx("container")}>
      <Row className={cx("content")}>
        <Col md={5}>
          <NavLink to={`/`} className={cx("btn__out")} variant="danger">
            <FontAwesomeIcon icon={faChevronLeft} />
            Quay lại Trang chủ
          </NavLink>
        </Col>
        <Col md={7} className={cx("box__name_exam")}>
          <div className={cx("text")}>Tên đề thi</div>
          <div className={cx("text")}>Điểm : </div>
        </Col>
      </Row>
      <Row className={cx("box__content")}>
        <Col md={5}>
          <Row className={cx("container__result")}>
            <Card.Subtitle>8 Bình luận</Card.Subtitle>
            <Row>
              <Col className={cx("no-gutters-col")} md={2}>
                <div className={cx("avatar")}>
                  <FontAwesomeIcon
                    className={cx("avatar__icon")}
                    icon={faUser}
                  />
                </div>
              </Col>
              <Col className={cx("no-gutters-col")} md={10}>
                <div className={cx("box__comment")}>
                  <Form.Control
                    className={cx("input__comment")}
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Viết bình luận"
                  />
                  <Button className={cx("btn__post")}>Đăng</Button>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className={cx("no-gutters-col")} md={2}>
                <div className={cx("avatar")}>
                  <FontAwesomeIcon
                    className={cx("avatar__icon")}
                    icon={faUser}
                  />
                </div>
              </Col>
              <Col className={cx("no-gutters-col")} md={10}>
                <div className={cx("box__question")}>
                  <Form.Control
                    className={cx("input__comment")}
                    as="textarea"
                    aria-label="With textarea"
                    defaultValue={"giải đáp giúp câu 1"}
                  />
                  <div className={cx("group__action")}>
                    <Button className={cx("btn__post")}>Like</Button>
                    <Button
                      onClick={() => handleClickComment()}
                      className={cx("btn__post")}
                    >
                      Like
                    </Button>
                    <Card.Subtitle>1 Bình luận</Card.Subtitle>
                  </div>
                  {toggle ? (
                    <div className={cx("box__comment")}>
                      <Form.Control
                        className={cx("input__comment")}
                        as="textarea"
                        aria-label="With textarea"
                        placeholder="Viết bình luận"
                      />
                      <Button className={cx("btn__post")}>Đăng</Button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col md={7}>
          {listQuestion &&
            listQuestion.length > 0 &&
            listQuestion.map((item, index) => (
              <Card className={cx("box__question")} key={index}>
                <Card.Body>
                  <Card.Text className={cx("text_question")}>
                    <span id={item.id} className={cx("num_question")}>
                      Câu {item.id}:
                    </span>
                    {item.question}
                  </Card.Text>
                  <div className={cx("group__answer")}>
                    <Card.Text
                      className={cx("title_answer", {
                        text__success: item.selectedAnswer === item.answer,
                        text__failed: item.selectedAnswer !== item.answer,
                      })}
                    >
                      Đáp án đúng: {item.answer}
                    </Card.Text>

                    {["A", "B", "C", "D"].map((option) => (
                      <Card.Link
                        key={option}
                        className={cx("item_option", {
                          active__answer: item.selectedAnswer === option,
                          active__null: item.selectedAnswer === null,
                          active__wrong:
                            item.selectedAnswer === option &&
                            item.selectedAnswer !== item.answer,
                        })}
                        href="#"
                      >
                        {option}
                      </Card.Link>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Answer;
