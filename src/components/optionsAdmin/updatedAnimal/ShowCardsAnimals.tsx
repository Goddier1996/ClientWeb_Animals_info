import { AnimalsInfo } from "../../../interface/info.model";
import PopUpUpdated from "./PopUpUpdated";
import {ShowModelPopUp} from "../../../customHook/ShowModelPopUp"


const ShowCardsAnimals: React.FC<{
  infoAnimal: AnimalsInfo;
}> = ({ infoAnimal }) => {


   // show model Updated info Animal custom hook
  const { show, handleShow, handleClose } = ShowModelPopUp();

  
  return (
    <>
      <div key={infoAnimal._id} className="cardDeleteOrUpdated">
        <div className="card_image">
          <img
            src={infoAnimal.image}
            alt="card animal"
            onClick={() => handleShow()}
          />
        </div>
      </div>

      {/* pop up Updated info Animal , from UpdatedInfo.js component*/}
      <PopUpUpdated
        show={show}
        idAnimal={infoAnimal._id}
        handleClose={() => handleClose}
      />
    </>
  );
};


export default ShowCardsAnimals;