import { Form, Modal } from "react-bootstrap";
import ChooseUpdatedAnimal from "../../../optionsAdmin/updatedAnimal/UpdatedInfoAnimal"


const OptionUpdatedAnimal:React.FC<{ handleCloseUpdatedAnimal: Function }> = ({handleCloseUpdatedAnimal}) => {


  return (
      <>
       <p
            className="closes"
            onClick={handleCloseUpdatedAnimal()}
            aria-label="Close"
          >
            &times;
          </p>

          <Modal.Body>
            <Form>
              <ChooseUpdatedAnimal />
            </Form>
          </Modal.Body>
      </>
  )
}



export default OptionUpdatedAnimal;