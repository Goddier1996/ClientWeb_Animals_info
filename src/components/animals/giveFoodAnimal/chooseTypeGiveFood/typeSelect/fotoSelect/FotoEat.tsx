import DontKnowWhatAnimalEat from "../tools/DontKnowWhatAnimalEat";
import SelectImg from "./SelectImg";
import OverlayTriggerWhatAnimalEat from "../tools/OverlayTriggerWhatAnimalEat";
import { AnimalIdInfo } from "../../../../../../interface/info.model";



const FotoEat: React.FC<{
  dataAnimal: AnimalIdInfo;
  closeStartPopUpSelectTypeGiveEat: Function;
  closeImgEatPopUp: Function;
}> = ({ dataAnimal, closeStartPopUpSelectTypeGiveEat, closeImgEatPopUp }) => {


  return (
    <div>
      {/* here info if user don't know what animal eat */}
      <div className="titleHeaterHelp">
        <OverlayTriggerWhatAnimalEat dataAnimal={dataAnimal} />
      </div>

      <div className="titleHeaterInfo">
        <DontKnowWhatAnimalEat dataAnimal={dataAnimal} />
      </div>

      <div className="chioseImage">
        <SelectImg
          eatOrNo={"Eat"}
          dataAnimal={dataAnimal}
          closeStartPopUpSelectTypeGiveEat={closeStartPopUpSelectTypeGiveEat()}
          closeImgEatPopUp={() => closeImgEatPopUp()}
        />
        <SelectImg
          eatOrNo={"Not Eat"}
          dataAnimal={dataAnimal}
          closeStartPopUpSelectTypeGiveEat={closeStartPopUpSelectTypeGiveEat()}
          closeImgEatPopUp={() => closeImgEatPopUp()}
        />
      </div>
    </div>
  );
};


export default FotoEat;