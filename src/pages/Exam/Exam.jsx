import className from "classnames/bind";
import styles from "./Exam.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Form, Button, Table, Card } from "react-bootstrap";

import TitleComponent from "../../Components/TitleComponent/TitleComponent";
import { NavLink, useParams } from "react-router-dom";
import ModalExam from "./components/ModalExam/ModalExam";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import { setLoading } from "../../redux/features/ExamSlice/ExamSlice";

const cx = className.bind(styles);

const Exam = () => {
  const dispatch = useDispatch();
  const { nameUni, nameMajor, nameSub } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [search, setSearch] = useState("");

  const listExam = useSelector((state) => state.exam.data);
  const isLoading = useSelector((state) => state.exam.loading);

  const handleInputSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const filterExams = listExam.filter((item) =>
    item.exam.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);

    return () => clearTimeout(delay);
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container className={cx("container")}>
      <Row className={cx("content")}>
        <TitleComponent title={`${nameUni} / ${nameMajor} / ${nameSub}`} />
      </Row>
      <Row>
        <div className={cx("input__search")}>
          <Form.Control
            onChange={(e) => handleInputSearch(e)}
            size="lg"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Tìm kiếm theo tên đề thi"
          />

          <FontAwesomeIcon
            className={cx("icon_search")}
            icon={faMagnifyingGlass}
          />
        </div>
      </Row>
      {/* table exam */}
      {/* <Row>
        <Row xs="auto" className="justify-content-md-center">
          <Table className={cx("table")} striped="columns">
            <thead>
              <tr>
                <th>ID</th>
                <th>Đề thi</th>
                <th>Môn học</th>
                <th>Học kì</th>
                <th>Năm</th>
                <th>Số câu</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {listExam &&
                listExam.length > 0 &&
                listExam.map((item, index) => (
                  <tr key={index} className={cx("tr")}>
                    <td>{item.id}</td>
                    <td>{item.exam}</td>
                    <td>{item.subject}</td>
                    <td>{item.semester}</td>
                    <td>{item.year}</td>
                    <td>{item.numSentences}</td>
                    <td>
                      <Button
                        onClick={() => setModalShow(true)}
                        className={cx("btn__document")}
                      >
                        Xem ngay
                      </Button>

                      <ModalExam
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        idExam={item.id}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </Row> */}

      <Row className={cx("box__exam")}>
        {filterExams && filterExams.length ? (
          filterExams &&
          filterExams.length > 0 &&
          filterExams.map((item, index) => (
            <Col className={cx("box__card")} md="3" key={index}>
              <Card className={cx("card__item")}>
                <Card.Body>
                  <Card.Title>{item.exam}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {nameMajor} | {nameUni}
                  </Card.Subtitle>
                  <Card.Text>Học kỳ: {item.semester}</Card.Text>
                  <Card.Text>Năm : {item.year}</Card.Text>
                  <Card.Text>Số câu: {item.numSentences}</Card.Text>
                  <Card.Text>Số lần thi: 1</Card.Text>
                </Card.Body>
                <Button onClick={() => setModalShow(true)}>Free</Button>
                <ModalExam
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  idexam={item.id}
                />
              </Card>
            </Col>
          ))
        ) : (
          <Row>
            <h5 className={cx("not__found")}>Không tìm thấy đề thi...</h5>
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default Exam;
