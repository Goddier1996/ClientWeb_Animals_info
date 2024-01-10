import { Button, Form, Modal } from "react-bootstrap";
import ImageEat from "./typeSelect/fotoSelect/FotoEat";
import InputEat from "./typeSelect/inputFood/GiveFoodAnimal";
import { AnimalIdInfo } from "../../../../interface/info.model";


const ModelTypeSelectGiveEat: React.FC<{
  show: boolean;
  onHide: Function;
  title: String;
  typeSelect: string;
  dataAnimalId: AnimalIdInfo;
  closeStartPopUpSelectTypeGiveEat: Function;
}> = ({
  show,
  onHide,
  title,
  typeSelect,
  dataAnimalId,
  closeStartPopUpSelectTypeGiveEat,
}) => {

  
  return (
    <>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          {typeSelect == "imgSelect" ? (
            <>
              <Form>
                <ImageEat
                  dataAnimal={dataAnimalId}
                  closeStartPopUpSelectTypeGiveEat={() =>
                    closeStartPopUpSelectTypeGiveEat()
                  }
                  closeImgEatPopUp={() => onHide()}
                />
              </Form>

              <div className="buttonExit">
                <Button
                  variant="danger"
                  onClick={() => onHide()}
                  style={{
                    marginTop: "3%",
                    cursor:
                      "url(https://cur.cursors-4u.net/games/gam-4/gam307.ani),url(https://cur.cursors-4u.net/games/gam-4/gam307.png), pointer",
                  }}
                >
                  {title}
                </Button>
              </div>
            </>
          ) : typeSelect == "inputValue" ? (
            <>
              <Form>
                <InputEat
                  hideModelFood={onHide}
                  dataAnimal={dataAnimalId}
                  closeStartPopUpSelectTypeGiveEat={() =>
                    closeStartPopUpSelectTypeGiveEat()
                  }
                  closeInputEatPopUp={() => onHide()}
                />
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