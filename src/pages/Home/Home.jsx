import className from "classnames/bind";
import styles from "./Home.module.scss";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Row } from "react-bootstrap";
import Banner from "./components/Banner/Banner";
import University from "./components/University/University";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import { setLoading } from "../../redux/features/UniversitySlice/UniversitySlice";
import { useEffect } from "react";

const cx = className.bind(styles);
const Home = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.university.loading);

  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(setLoading(false));
    }, 800);

    return () => clearTimeout(delay);
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container className={cx("container")}>
      <Row className={cx("content")}>
        <Banner />
        <University />
      </Row>
    </Container>
  );
};

export default Home;
