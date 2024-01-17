import "../../../css/home.css";
import { Modal } from "react-bootstrap";
import ShowCardsAnimals from "./ShowCardsAnimals";
import { FetchData } from "../../../customHook/FetchData";
import Loading from "../../tools/LoadingStyle/loadingItems/Loading";


const ChooseUpdatedAnimal: React.FC = () => {


  const { data, loading } = FetchData();


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