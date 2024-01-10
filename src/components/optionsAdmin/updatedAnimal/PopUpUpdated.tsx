import { Form, Modal } from "react-bootstrap";
import UpdatedInfo from "./UpdatedAnimal";


const PopUpUpdated: React.FC<{ show: boolean,idAnimal:string, handleClose: Function }> = ({
  show,
  idAnimal,
  handleClose,
}) => {


  return (
    <>
      <Modal
        show={show}
        onHide={handleClose()}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <p className="closes" onClick={handleClose()} aria-label="Close">
          &times;
        </p>

        <Modal.Body>
          <Form>
            <UpdatedInfo idAnimal={idAnimal} />
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};


export default PopUpUpdated;