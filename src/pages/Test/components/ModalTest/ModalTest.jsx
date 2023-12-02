import className from "classnames/bind";
import styles from "./ModalTest.module.scss";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";

const cx = className.bind(styles);

const ModalTest = (props) => {
  const navigate = useNavigate();

  const handleBtnConfirm = () => {
    navigate(props.goBack);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter">
          <FontAwesomeIcon
            className={cx("icon__warning")}
            icon={faExclamation}
          />{" "}
          {props.ModalTitle}
        </Modal.Title>

        <h5 className={cx("time")}>
          Thời gian làm bài của bạn còn {props.ModalTime}
        </h5>
        <p>{props.ModalContent}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Đóng
        </Button>
        <NavLink to={props.route}>
        <Button onClick={() => handleBtnConfirm()} variant="primary">
          Xác nhận
        </Button>

        </NavLink>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTest;
