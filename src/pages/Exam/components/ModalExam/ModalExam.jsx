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
        <h4
          className={cx("title__modal")}
          
        >
          Tên đề thi
        </h4>
      </Modal.Header>
      <Modal.Body>
        <p>Trường <span className={cx("format_uni")}>:</span> </p>
        <p>Chuyên ngành <span className={cx("format_major")}>: </span> </p>
        <p>Môn Học <span className={cx("format_subject")}>:</span></p>
        <p>Số câu hỏi <span className={cx("format_question")}>:</span> </p>
        <p>Thời gian thi <span className={cx("format_time")}>:</span> </p>
        <p>Phương thức thi <span className={cx("format_method")}>:</span> </p>
        <p>Số lượng lần làm đề <span className={cx("format_num")}>:</span> </p>
      </Modal.Body>
      <Modal.Footer className={cx("box__btn")}>
        <NavLink to={`/test/${props.idexam}`}>
          <Button className={cx("btn")} onClick={props.onHide}>
            Thi Ngay
          </Button>
        </NavLink>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalExam;
