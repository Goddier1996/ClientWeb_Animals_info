import "../../../css/home.css";
import { Modal } from "react-bootstrap";
import CardAnimalDelete from "./CardAnimalDelete";
import { FetchData } from "../../../customHook/FetchData";
import Loading from "../../tools/LoadingStyle/loadingItems/Loading";


const DeleteInfo: React.FC = () => {


  const { data, loading } = FetchData();

  
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