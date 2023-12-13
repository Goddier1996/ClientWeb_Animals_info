import { Form, Modal } from "react-bootstrap";
import AddAnimal from "../../../optionsAdmin/AddAnimal";


const OptionAddNewAnimal: React.FC<{ handleCloseAddNewAnimal: Function }> = ({
  handleCloseAddNewAnimal,
}) => {

  return (
    <>
      <p
        className="closes"
        onClick={handleCloseAddNewAnimal()}
        aria-label="Close"
      >
        &times;
      </p>

      <Modal.Body>
        <Form>
          <AddAnimal />
        </Form>
      </Modal.Body>
    </>
  );
};


export default OptionAddNewAnimal;