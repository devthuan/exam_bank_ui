import className from "classnames/bind";
import styles from "./Subject.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button } from "react-bootstrap";

import TitleComponent from "../../Components/TitleComponent/TitleComponent";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "../../redux/features/SubjectSlice/SubjectSlice";
import Loading from "../../Components/Loading/Loading";

const cx = className.bind(styles);
const Subject = () => {
  const dispatch = useDispatch();
  const { nameUni, nameMajor } = useParams();

  const listSubject = useSelector((data) => data.subject.data);
  const isLoading = useSelector((data) => data.subject.loading);

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
        <TitleComponent title={`${nameUni} / ${nameMajor} / Môn Học`} />
      </Row>
      <Row>
        <Row xs="auto" className="justify-content-md-center">
          {listSubject &&
            listSubject.length > 0 &&
            listSubject.map((item, index) => (
              <div key={index} className={cx("box__document")}>
                <Col md={2}>
                  <div className={cx("logo")}>
                    <img
                      className={cx("img__logo")}
                      src={item.logo}
                      alt="image"
                    />
                  </div>
                </Col>
                <Col md={7}>
                  <h2 className={cx("title__document")}>Môn {item.subject}</h2>
                  <p className={cx("name__document")}>
                    Số đề thi: {item.numSubject}
                  </p>
                </Col>
                <Col md={3}>
                  <div className="box__btn">
                    <NavLink
                      to={`/major/${nameUni}/${nameMajor}/${item.subject}`}
                    >
                      <Button className={cx("btn__document")}>Xem ngay</Button>
                    </NavLink>
                  </div>
                </Col>
              </div>
            ))}
        </Row>
      </Row>
    </Container>
  );
};

export default Subject;
