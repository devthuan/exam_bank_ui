import className from "classnames/bind";
import styles from "./Document.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button } from "react-bootstrap";

import TitleComponent from "../../Components/TitleComponent/TitleComponent";

const cx = className.bind(styles);
const Document = () => {
  const listDocument = [
    {
      id: 1,
      subject: "Giải tích 1",
      description: "Tài liệu Chương 1 giải tích 1",
      university: "Đại học Sài Gòn",
      major: "Công nghệ thông tin",
    },
    {
      id: 2,
      subject: "Giải tích 2",
      description: "Tài liệu Chương 1 giải tích 2",
      university: "Đại học Sài Gòn",
      major: "Công nghệ thông tin",
    },
    {
      id: 3,
      subject: "Lý thuyết đồ thị",
      description: "Tài liệu về thuật toán Dijkstra",
      university: "Đại học Sài Gòn",
      major: "Công nghệ thông tin",
    },
  ];

  return (
    <Container className={cx("container")}>
      <Row className={cx("content")}>
        <TitleComponent title="Tài liệu" width={160} />
      </Row>
      <Row>
        <Row xs="auto" className="justify-content-md-center">
          {listDocument && listDocument.length > 0 &&
          listDocument.map((item, index) => (
          <Col key={index}>
            <div className={cx("box__document")}>
              <h2 className={cx("title__document")}>{item.subject}</h2>
              <div className={cx("box_description")}>
                <p className={cx("name__document")}>
                  Tài liệu : {item.description}
                </p>
                <p className={cx("description")}>Trường {item.university}</p>
                <p className={cx("description")}>Ngành {item.major}</p>
              </div>
              <Button className={cx("btn__document")}>
                <FontAwesomeIcon
                  className={cx("icon__download")}
                  icon={faDownload}
                  beat
                />
                Tải ngay
              </Button>
            </div>
          </Col>
            
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default Document;
