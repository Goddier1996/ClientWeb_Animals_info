import { Form, Modal } from "react-bootstrap";
import AddFoodAnimal from "../../giveFoodAnimal/AddFoodAnimal";


const ModelGetFood: React.FC<{
  showGetFoodAnimal: boolean;
  handleCloseGetFoodAnimal: Function;
  idAnimal:any
}> = ({ showGetFoodAnimal, handleCloseGetFoodAnimal,idAnimal }) => {


  

  return (
    <>
      <Modal
        show={showGetFoodAnimal}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={handleCloseGetFoodAnimal()}
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
      >
        <p
          className="closes"
          onClick={handleCloseGetFoodAnimal()}
          aria-label="Close"
        >
          &times;
        </p>

        <Modal.Body>
          <Form>
            {/* show pop up add eat animal */}
            <AddFoodAnimal idAnimal={ idAnimal} />
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};


export default ModelGetFood;