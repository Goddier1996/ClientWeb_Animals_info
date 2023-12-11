import { Form, Modal } from "react-bootstrap";
import InfoAnimal from "./ShowInfoAnimal";


const ModelInfoAnimal: React.FC<{
  showShowInfoAnimal: boolean;
  hideModelInfoAnimal: Function;
}> = ({showShowInfoAnimal,hideModelInfoAnimal}) => {


  return (
    <>
      <Modal
        show={showShowInfoAnimal}
        aria-labelledby="contained-modal-title-vcenter"
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
      >
        <Modal.Body>
          <Form>
            {/* show pop up info about animal - use showInfoAnimal.js */}
            <InfoAnimal hideModelInfo={hideModelInfoAnimal()} />
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};


export default ModelInfoAnimal;