import { Button, Form, Modal } from "react-bootstrap";
import ImageEat from "./typeSelect/fotoSelect/FotoEat";
import InputEat from "./typeSelect/inputFood/GiveFoodAnimal";


const ModelTypeSelectGiveEat: React.FC<{
  show: any;
  onHide: any;
  title: string;
  typeSelect: string;
}> = ({ show, onHide, title, typeSelect }) => {


  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Body>
          {typeSelect == "imgSelect" ? (
            <>
              <Form>
                <ImageEat />
              </Form>

              <div className="buttonExit">
                <Button variant="danger" onClick={onHide}>
                  {title}
                </Button>
              </div>
            </>
          ) : typeSelect == "inputValue" ? (
            <>
              <Form>
                <InputEat hideModelFood={onHide} />
              </Form>
            </>
          ) : (
            ""
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};



export default ModelTypeSelectGiveEat;