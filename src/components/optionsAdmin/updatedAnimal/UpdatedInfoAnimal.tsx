import { useState, useEffect } from "react";
import "../../../css/home.css";
import { Modal } from "react-bootstrap";
import { LoadAllCardsAnimals } from "../../../Server/LoadDataApi";
import PopUpUpdated from "./PopUpUpdated";
import ShowCardsAnimals from "./ShowCardsAnimals";



const ChooseUpdatedAnimal: React.FC = () => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [saveIdAnimal, setSaveIdAnimal] = useState<string>("");

  const [animals, SetAnimals] = useState([] as any[]);



  //load all card animals from database
  const LoadAllNotes = async () => {

    SetAnimals(await LoadAllCardsAnimals());
  };



  // here active pop up updated data animal
  const AnimalChoose = async (id: string) => {
    
    setSaveIdAnimal(id)

    handleShow();
  };




  useEffect(() => {
    LoadAllNotes();

  }, []);



  return (
    <div>
      <div className="titleHeater">
        <h1>
          Choose Animal for Updated{" "}
          <img
            src="https://i.postimg.cc/85D0BbW2/Basic-Ui-544.jpg"
            alt="Choose Animal for Updated"
            style={{ height: "40px" }}
          />
        </h1>
      </div>

      {/* here show all animals */}
      <Modal.Body>
        <div className="modelsInfoDeleteOrUpdated">
          {animals.map((animal) => (
           <ShowCardsAnimals infoAnimal={animal} AnimalChoose={AnimalChoose}/>
          ))}
        </div>
      </Modal.Body>

      
      {/* pop up Updated info Animal , from UpdatedInfo.js component*/}
        <PopUpUpdated show={show} idAnimal={saveIdAnimal} handleClose={()=>handleClose}/>
    </div>
  );
}


export default ChooseUpdatedAnimal;