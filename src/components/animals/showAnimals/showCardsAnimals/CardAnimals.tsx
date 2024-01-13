import { AnimalsInfo } from "../../../../interface/info.model";
import { AsyncImage } from "loadable-image";
import { Fade } from "transitions-kit";
import LoadingCardsAnimals from "../../../tools/LoadingStyle/loadingItems/LoadingCardsAnimals";
import ModelGetFood from "../showCardsAnimals/ModelGetFood";
import ModelInfoAnimal from "../showCardsAnimals/infoAnimal/ModelInfoAnimal";
import { ShowModelPopUp } from "../../../../customHook/ShowModelPopUp";


const CardAnimals: React.FC<{
  dataAllAnimals: AnimalsInfo;
}> = ({ dataAllAnimals }) => {


  //popup open or close , sound animal show popUp
  const { show, handleShow, handleClose } = ShowModelPopUp();
  //popup open or close , show info about animal
  const { showOneMoreModel, handleShowOneMoreModel, handleCloseOneMoreModel } = ShowModelPopUp();


  return (
    <div>
      <div className="cardx">
        <div className="card_image">
          <AsyncImage
            src={dataAllAnimals.image}
            style={{
              width: 150,
              height: 150,
              objectFit: "cover",
              borderRadius: "40px",
            }}
            Transition={Fade}
            loader={
              <div>
                <LoadingCardsAnimals />
              </div>
            }
            alt="image animal"
            onClick={() => handleShowOneMoreModel()}
          />
        </div>

        <div className="card_title title-white">
          <h6>{dataAllAnimals.title}</h6>
          <img
            onClick={() => handleShow()}
            src="https://i.postimg.cc/fyh8t96R/bowel.webp"
            alt="give eat"
          />
        </div>
      </div>

      {/* get a food animal */}
      <ModelGetFood
        showGetFoodAnimal={show}
        handleCloseGetFoodAnimal={() => handleClose}
        idAnimal={dataAllAnimals._id}
      />

      {/* show animal info model */}
      <ModelInfoAnimal
        showShowInfoAnimal={showOneMoreModel}
        hideModelInfoAnimal={() => handleCloseOneMoreModel}
        idAnimal={dataAllAnimals._id}
      />
    </div>
  );
};


export default CardAnimals;