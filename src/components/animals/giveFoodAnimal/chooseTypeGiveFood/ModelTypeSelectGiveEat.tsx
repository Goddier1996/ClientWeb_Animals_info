import { Button, Form, Modal } from "react-bootstrap";
import ImageEat from "./typeSelect/fotoSelect/FotoEat";
import InputEat from "./typeSelect/inputFood/GiveFoodAnimal";
import cookies from "js-cookie";
import { AnimalIdInfo } from "../../../../interface/info.model";


const ModelTypeSelectGiveEat: React.FC<{
  show: boolean;
  onHide: Function;
  title: String;
  typeSelect: string;
  dataAnimalId: AnimalIdInfo;
  dataAnimalInfoHebrewLanguage: AnimalIdInfo;
  closeStartPopUpSelectTypeGiveEat: Function;
}> = ({
  show,
  onHide,
  title,
  typeSelect,
  dataAnimalId,
  dataAnimalInfoHebrewLanguage,
  closeStartPopUpSelectTypeGiveEat,
}) => {


  const currentLanguageCode = cookies.get("i18next") || "en";


  return (
    <>
      <Modal
        show={show}
        onHide={() => onHide()}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Body>
          {typeSelect == "imgSelect" ? (
            <>
              <Form>
                {currentLanguageCode == "hw" ? (
                  <ImageEat
                    dataAnimal={dataAnimalInfoHebrewLanguage}
                    closeStartPopUpSelectTypeGiveEat={() =>
                      closeStartPopUpSelectTypeGiveEat()
                    }
                    closeImgEatPopUp={() => onHide()}
                  />
                ) : (
                  <ImageEat
                    dataAnimal={dataAnimalId}
                    closeStartPopUpSelectTypeGiveEat={() =>
                      closeStartPopUpSelectTypeGiveEat()
                    }
                    closeImgEatPopUp={() => onHide()}
                  />
                )}
              </Form>

              <div className="buttonExit">
                <Button variant="danger" onClick={() => onHide()}>
                  {title}
                </Button>
              </div>
            </>
          ) :
            typeSelect == "inputValue" ? (
            <>
              <Form>
                {currentLanguageCode == "hw" ? (
                  <InputEat
                    hideModelFood={onHide}
                    dataAnimal={dataAnimalInfoHebrewLanguage}
                    closeStartPopUpSelectTypeGiveEat={() =>
                      closeStartPopUpSelectTypeGiveEat()
                    }
                    closeInputEatPopUp={() => onHide()}    
                  />
                ) : (
                      <InputEat hideModelFood={onHide}
                        dataAnimal={dataAnimalId}
                        closeStartPopUpSelectTypeGiveEat={() =>
                          closeStartPopUpSelectTypeGiveEat()
                        }
                        closeInputEatPopUp={() => onHide()}
                      />
                )}
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
