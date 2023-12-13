import { Button, Form, Modal } from "react-bootstrap";
import ImageEat from "./typeSelect/fotoSelect/FotoEat";
import InputEat from "./typeSelect/inputFood/GiveFoodAnimal";
import cookies from "js-cookie";


const ModelTypeSelectGiveEat: React.FC<{
  show: boolean;
  onHide: Function;
  title: String;
  typeSelect: string;
  dataAnimalId: string
  dataAnimalInfoHebrewLanguage:string
}> = ({ show, onHide, title, typeSelect,dataAnimalId,dataAnimalInfoHebrewLanguage }) => {


  const currentLanguageCode = cookies.get("i18next") || "en";


  return (
    <>
      <Modal
        show={show}
        onHide={()=>onHide()}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Body>
          {typeSelect == "imgSelect" ? (
            <>
              <Form>
                {currentLanguageCode == "hw" ? <ImageEat dataAnimal={dataAnimalInfoHebrewLanguage} /> :
                  <ImageEat dataAnimal={dataAnimalId} />}
              </Form>

              <div className="buttonExit">
                <Button variant="danger" onClick={()=>onHide()}>
                  {title}
                </Button>
              </div>
            </>
          ) : typeSelect == "inputValue" ? (
            <>
              <Form>
                  {currentLanguageCode == "hw" ? <InputEat hideModelFood={onHide} dataAnimal={dataAnimalInfoHebrewLanguage} /> :
                    <InputEat hideModelFood={onHide} dataAnimal={dataAnimalId} />}
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