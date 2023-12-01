import className from "classnames/bind";
import styles from "./ModalExam.module.scss";
import { NavLink, useParams } from "react-router-dom";

import { Modal, Button } from "react-bootstrap";

const cx = className.bind(styles);

const ModalExam = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          className={cx("title__modal")}
          id="contained-modal-title-vcenter"
        >
          Tên đề thi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>Tên trường</p>
        <p>Tên ngành</p>
        <p>Số câu hỏi</p>
        <p>Thời gian thi</p>
        <p>Phương thức thi</p>
        <p>Số lượng lần làm đề</p>
      </Modal.Body>
      <Modal.Footer className={cx("box__btn")}>
        <NavLink to={`/test/${props.idExam}`}>
          <Button className={cx("btn")} onClick={props.onHide}>
            Thi Ngay
          </Button>
        </NavLink>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalExam;
