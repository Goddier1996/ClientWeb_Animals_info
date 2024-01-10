import { AnimalsInfo } from "../../../../interface/info.model";
import { AsyncImage } from "loadable-image";
import { Fade } from "transitions-kit";
import LoadingCardsAnimals from "../../../tools/LoadingStyle/loadingItems/LoadingCardsAnimals";
import { useState } from "react";
import ModelGetFood from "../showCardsAnimals/ModelGetFood";
import ModelInfoAnimal from "../showCardsAnimals/infoAnimal/ModelInfoAnimal";

const CardAnimals: React.FC<{
  dataAllAnimals: AnimalsInfo;
}> = ({ dataAllAnimals }) => {


  //popup open or close , sound animal show popUp
  const [showGetFoodAnimal, setShowGetFoodAnimal] = useState<boolean>(false);
  const handleCloseGetFoodAnimal = () => setShowGetFoodAnimal(false);
  const handleShowGetFoodAnimal = () => setShowGetFoodAnimal(true);

  //popup open or close , show info about animal
  const [showShowInfoAnimal, setShowShowInfoAnimal] = useState<boolean>(false);
  const handleCloseInfoAnimal = () => setShowShowInfoAnimal(false);
  const handleShowShowInfoAnimal = () => setShowShowInfoAnimal(true);



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
            onClick={() => handleShowShowInfoAnimal()}
          />
        </div>

        <div className="card_title title-white">
          <h6>{dataAllAnimals.title}</h6>
          <img
            onClick={() => handleShowGetFoodAnimal()}
            src="https://i.postimg.cc/fyh8t96R/bowel.webp"
            alt="give eat"
          />
        </div>
      </div>

      {/* get a food animal */}
      <ModelGetFood
        showGetFoodAnimal={showGetFoodAnimal}
        handleCloseGetFoodAnimal={() => handleCloseGetFoodAnimal}
        idAnimal={dataAllAnimals._id}
      />

      {/* show animal info model */}
      <ModelInfoAnimal
        showShowInfoAnimal={showShowInfoAnimal}
        hideModelInfoAnimal={() => handleCloseInfoAnimal}
        idAnimal={dataAllAnimals._id}
      />
    </div>
  );
};


export default CardAnimals;