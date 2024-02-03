import { AnimalsInfo } from "../../../../interface/info.model";
import ModelGetFood from "../showCardsAnimals/ModelGetFood";
import ModelInfoAnimal from "../showCardsAnimals/infoAnimal/ModelInfoAnimal";
import { ShowModelPopUp } from "../../../../customHook/ShowModelPopUp";
import ShowAsyncImage from "../../../tools/AsyncImages/ShowAsyncImage";



const CardAnimals: React.FC<{
  dataAllAnimals: AnimalsInfo;
}> = ({ dataAllAnimals }) => {


  //popup open or close , sound animal show popUp
  const { show, handleShow, handleClose } = ShowModelPopUp();

  //popup open or close , show info about animal
  const { showOneMoreModel, handleShowOneMoreModel, handleCloseOneMoreModel } =
    ShowModelPopUp();

  
  
  return (
    <div>
      <div className="cardx">
        <div className="card_image">
          <ShowAsyncImage
            imgShow={dataAllAnimals.image}
            widthImg={"150px"}
            heightImg={"150px"}
            altImage={"image animal"}
            typeAnimation={"Fade"}
            activeFunction={() => handleShowOneMoreModel()}
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