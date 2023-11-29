import className from "classnames/bind";
import styles from "./Exam.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button, Table } from "react-bootstrap";

import TitleComponent from "../../Components/TitleComponent/TitleComponent";
import { NavLink, useParams } from "react-router-dom";
import Logo from "../../assets/images/logo_sgu.jpg";

const cx = className.bind(styles);

const Exam = () => {
  const { nameUni, nameMajor, nameSub } = useParams();
  console.log(nameUni, nameMajor, nameSub);

  const listExam = [
    {
      id: 1,
      exam: "Đề thi cuối kỳ môn Giải tích 2",
      subject: "Giải tích 2",
      semester: "cuối kì 2",
      year: "2023",
      numSentences: 60,
    },
    {
      id: 2,
      exam: "Đề thi cuối kỳ môn Giải tích 2",
      subject: "Giải tích 2",
      semester: "cuối kì 2",
      year: "2023",
      numSentences: 60,
    },
    {
      id: 3,
      exam: "Đề thi cuối kỳ môn Giải tích 2",
      subject: "Giải tích 2",
      semester: "cuối kì 2",
      year: "2023",
      numSentences: 60,
    },
  ];

  return (
    <Container className={cx("container")}>
      <Row className={cx("content")}>
        <TitleComponent title={`${nameUni} / ${nameMajor} / ${nameSub}`} />
      </Row>
      <Row>
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
                    <td>{item.numSentences}</td>
                    <td>{item.year}</td>
                    <td>
                      <NavLink to={``}>
                        <Button size="sm" className={cx("btn__document")}>
                          Xem ngay
                        </Button>
                      </NavLink>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </Row>
    </Container>
  );
};

export default Exam;
