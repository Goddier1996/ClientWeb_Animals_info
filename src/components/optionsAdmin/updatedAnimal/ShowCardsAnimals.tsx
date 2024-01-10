import { useState } from "react";
import { AnimalsInfo } from "../../../interface/info.model";
import PopUpUpdated from "./PopUpUpdated";

const ShowCardsAnimals: React.FC<{
  infoAnimal: AnimalsInfo;
}> = ({ infoAnimal }) => {


  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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