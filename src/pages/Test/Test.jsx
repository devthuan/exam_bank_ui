import className from "classnames/bind";
import styles from "./Test.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faClock,
  faFileArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button, Card } from "react-bootstrap";

import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalTest from "./components/ModalTest/ModalTest";
import CountDownTimer from "../../Components/CountDownTimer/CountDownTimer";

const cx = className.bind(styles);
const Test = () => {
  const { nameUni, nameMajor } = useParams();
  const [answers, setAnswers] = useState({});

  const [modalShowExit, setModalShowExit] = useState(false);
  const [modalShowSubmit, setModalShowSubmit] = useState(false);

  const listQuestion = [
    {
      id: 1,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
    {
      id: 2,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
    {
      id: 3,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
    {
      id: 4,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
    {
      id: 5,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
    {
      id: 6,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
    {
      id: 7,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
    {
      id: 8,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
    {
      id: 9,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
    {
      id: 10,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
    {
      id: 11,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
    {
      id: 12,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
    {
      id: 13,
      question:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      selectedAnswer: null,
    },
  ];

  const handleAnswer = (answerResult, numQuestion) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [numQuestion]: answerResult,
    }));
  };

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

  const handleBtnExit = () => {
    setModalShowExit(true);
  };

  const handleTimeout = () => {
    console.log("Hết thời gian!");
  };

  return (
    <Container className={cx("container")}>
      <Row className={cx("content")}>
        <Col md={2}>
          <Button
            onClick={() => handleBtnExit()}
            className={cx("btn__out")}
            variant="danger"
          >
            <FontAwesomeIcon icon={faPowerOff} />
            Thoát
          </Button>
          <ModalTest
            show={modalShowExit}
            onHide={() => setModalShowExit(false)}
            ModalTitle={"Bạn có chắc chắn muốn thoát ?"}
            ModalContent={
              "Khi bạn xác nhận thoát bài thi, bạn sẽ không thể tiếp tục làm bài ở lần thi này. Kết quả làm bài của bạn sẽ bị huỷ."
            }
            goBack={-1}
          />
        </Col>
        <Col md={6} className={cx("box__name_exam")}>
          <div className={cx("text")}>Tên đề thi</div>
        </Col>
        <Col md={4}>
          <div className={cx("box__right")}>
            <div className={cx("box__time")}>
              <FontAwesomeIcon icon={faClock} />
              <CountDownTimer initialTime={90} onTimeout={handleTimeout} />
            </div>
            <Button
              onClick={() => setModalShowSubmit(true)}
              className={cx("btn_submit")}
            >
              <FontAwesomeIcon icon={faFileArrowUp} />
              Nộp bài
            </Button>
            <ModalTest
              show={modalShowSubmit}
              onHide={() => setModalShowSubmit(false)}
              ModalTitle={"Bạn có chắc chắn muốn nộp bài ?"}
              ModalContent={
                "Khi xác nhận nhấn nộp bài, bạn sẽ không thể sửa lại bài thi của mình. Hãy chắc chắn bạn đã xem lại tất cả các đáp án. Chúc bạn may mắn!"
              }
            />
          </div>
        </Col>
      </Row>
      <Row className={cx("box__content")}>
        <Col md={9}>
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
                    <Card.Text className={cx("title_answer")}>
                      Đáp án của bạn:{" "}
                    </Card.Text>
                    <Card.Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleAnswer(1, item.id);
                      }}
                      className={cx(
                        "item_option",
                        answers[item.id] === 1 ? "active__answer" : ""
                      )}
                      href="#"
                    >
                      A
                    </Card.Link>
                    <Card.Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleAnswer(2, item.id);
                      }}
                      className={cx(
                        "item_option",
                        answers[item.id] === 2 ? "active__answer" : ""
                      )}
                      href="#"
                    >
                      B
                    </Card.Link>
                    <Card.Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleAnswer(3, item.id);
                      }}
                      className={cx(
                        "item_option",
                        answers[item.id] === 3 ? "active__answer" : ""
                      )}
                      href="#"
                    >
                      C
                    </Card.Link>
                    <Card.Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleAnswer(4, item.id);
                      }}
                      className={cx(
                        "item_option",
                        answers[item.id] === 4 ? "active__answer" : ""
                      )}
                      href="#"
                    >
                      D
                    </Card.Link>
                  </div>
                </Card.Body>
              </Card>
            ))}
        </Col>
        <Col md={3}>
          <Row className={cx("container__result")}>
            {listQuestion &&
              listQuestion.length > 0 &&
              listQuestion.map((item, index) => (
                <Card.Link
                  onClick={(event) => handleClick(event, item.id)}
                  key={index}
                  className={cx("item_num_question", {
                    active_num_question:
                      answers[item.id] !== null &&
                      answers[item.id] !== undefined,
                  })}
                >
                  {index + 1}
                </Card.Link>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Test;
