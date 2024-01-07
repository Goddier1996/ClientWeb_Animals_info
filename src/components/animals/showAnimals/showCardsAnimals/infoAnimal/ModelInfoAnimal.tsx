import { Form, Modal } from "react-bootstrap";
import InfoAnimal from "./ShowInfoAnimal";


const ModelInfoAnimal: React.FC<{
  showShowInfoAnimal: boolean;
  hideModelInfoAnimal: Function;
  idAnimal: string;
}> = ({ showShowInfoAnimal, hideModelInfoAnimal, idAnimal }) => {


  return (
    <>
      <Modal
        show={showShowInfoAnimal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
      >
          <Modal.Body>
            <Form>
              {/* show pop up info about animal - use showInfoAnimal.js */}
              <InfoAnimal
                hideModelInfo={hideModelInfoAnimal()}
                idAnimal={idAnimal}
              />
            </Form>
          </Modal.Body>
      </Modal>
    </>
  );
};


export default ModelInfoAnimal;