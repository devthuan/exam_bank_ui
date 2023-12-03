import className from "classnames/bind";
import styles from "./Document.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button, Spinner } from "react-bootstrap";

import TitleComponent from "../../Components/TitleComponent/TitleComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "../../redux/features/DocumentSlice/DocumentSlice";
import Loading from "../../Components/Loading/Loading";

const cx = className.bind(styles);
const Document = () => {
  const dispatch = useDispatch();
  const listDocument = useSelector((item) => item.document.data);
  const isLoading = useSelector((state) => state.document.loading);

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
        <TitleComponent title="Tài liệu" width={160} />
      </Row>
      <Row>
        <Row xs="auto" className="justify-content-md-center">
          {listDocument &&
            listDocument.length > 0 &&
            listDocument.map((item, index) => (
              <Col key={index}>
                <div className={cx("box__document")}>
                  <h2 className={cx("title__document")}>{item.subject}</h2>
                  <div className={cx("box_description")}>
                    <p className={cx("name__document")}>
                      Tài liệu : {item.description}
                    </p>
                    <p className={cx("description")}>
                      Trường {item.university}
                    </p>
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
