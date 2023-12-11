import { Form, Modal } from "react-bootstrap";
import DeleteInfo from "../../../optionsAdmin/deleteAnimal/DeleteAnimal";


const OptionDeleteAnimal: React.FC<{ handleCloseDeleteAnimal: Function }> = ({
  handleCloseDeleteAnimal,
}) => {


  return (
    <>
      <p
        className="closes"
        onClick={handleCloseDeleteAnimal()}
        aria-label="Close"
      >
        &times;
      </p>

      <Modal.Body>
        <Form>
          <DeleteInfo />
        </Form>
      </Modal.Body>
    </>
  );
};


export default OptionDeleteAnimal;