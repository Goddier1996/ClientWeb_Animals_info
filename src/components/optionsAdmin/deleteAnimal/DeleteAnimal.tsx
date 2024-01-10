import { useState, useEffect } from "react";
import "../../../css/home.css";
import { Modal } from "react-bootstrap";
import CardAnimalDelete from "./CardAnimalDelete";
import { ObjectCustomHook } from "../../../interface/info.model";
import { FetchData } from "../../../customHook/FetchData";
import Loading from "../../tools/LoadingStyle/loadingItems/Loading";

const DeleteInfo: React.FC = () => {


  const [saveOpjDataSendToCustomHook, SetSaveOpjDataSendToCustomHook] =
    useState<ObjectCustomHook>({});
  // customHook
  const { data, loading } = FetchData(saveOpjDataSendToCustomHook);


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
          {loading ? (
            <Loading />
          ) : (
            <div className="modelsInfoDeleteOrUpdated">
              {data.map((animal) => (
                <>
                  <CardAnimalDelete data={animal} />
                </>
              ))}
            </div>
          )}
        </Modal.Body>
      </div>
    </div>
  );
};


export default DeleteInfo;