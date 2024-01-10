import { useState, useEffect } from "react";
import "../../../css/home.css";
import { Modal } from "react-bootstrap";
import ShowCardsAnimals from "./ShowCardsAnimals";
import { ObjectCustomHook } from "../../../interface/info.model";
import { FetchData } from "../../../customHook/FetchData";
import Loading from "../../tools/LoadingStyle/loadingItems/Loading";


const ChooseUpdatedAnimal: React.FC = () => {


  const [saveOpjDataSendToCustomHook, SetSaveOpjDataSendToCustomHook] =
    useState<ObjectCustomHook>({});
  // customHook
  const { data, loading } = FetchData(saveOpjDataSendToCustomHook);


  //load all card animals from database
  const LoadAllNotes = () => {
    SetSaveOpjDataSendToCustomHook({
      typeHowUse: "englishLanguage",
    });
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
        {loading ? (
          <Loading />
        ) : (
          <div className="modelsInfoDeleteOrUpdated">
            {data.map((animal) => (
              <ShowCardsAnimals infoAnimal={animal} />
            ))}
          </div>
        )}
      </Modal.Body>
    </div>
  );
};


export default ChooseUpdatedAnimal;