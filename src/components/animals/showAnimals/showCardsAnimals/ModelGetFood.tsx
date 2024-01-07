import { Form, Modal } from "react-bootstrap";
import AddFoodAnimal from "../../giveFoodAnimal/AddFoodAnimal";


const ModelGetFood: React.FC<{
  showGetFoodAnimal: boolean;
  handleCloseGetFoodAnimal: Function;
  idAnimal: string;
}> = ({ showGetFoodAnimal, handleCloseGetFoodAnimal, idAnimal }) => {


  return (
    <div>
      <Modal
        show={showGetFoodAnimal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
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
            <AddFoodAnimal
              idAnimal={idAnimal}
              closeStartPopUpSelectTypeGiveEat={() =>
                handleCloseGetFoodAnimal()
              }
            />
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};


export default ModelGetFood;