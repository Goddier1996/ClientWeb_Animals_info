import { useState, useEffect } from "react";
import "../../../css/home.css";
import { Modal } from "react-bootstrap";
import { LoadAllCardsAnimals } from "../../../Server/LoadDataApi";
import CardAnimalDelete from "./CardAnimalDelete";
import {AnimalsInfo} from "../../../interface/info.model"


const DeleteInfo: React.FC = () => {


  const [animals, SetAnimals] = useState<AnimalsInfo[]>([]);


  const LoadAllNotes = async () => {

    SetAnimals(await LoadAllCardsAnimals());
  };



  useEffect(() => {

    LoadAllNotes();
  }, []);



  return (
    <div>

      <div>
        <div className="titleHeater">
          <h1>
            Delete Info Animal{" "}
            <img
              src="https://i.postimg.cc/LsmXccMh/Pngtree-delete-button-3d-icon-8633077.png"
              alt="Delete animal"
              style={{ height: "40px" }}
            />
          </h1>
        </div>

        <Modal.Body>
          <div className="modelsInfoDeleteOrUpdated">

            {animals.map((animal) => (
              <>
                <CardAnimalDelete data={animal} />
              </>
            ))}
            
          </div>
        </Modal.Body>

      </div>
    </div>
  );
};


export default DeleteInfo;