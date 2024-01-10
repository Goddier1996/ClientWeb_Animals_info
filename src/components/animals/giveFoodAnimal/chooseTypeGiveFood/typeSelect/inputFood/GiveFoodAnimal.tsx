import DontKnowWhatAnimalEat from "../tools/DontKnowWhatAnimalEat";
import OverlayTriggerWhatAnimalEat from "../tools/OverlayTriggerWhatAnimalEat";
import InputValue from "./InputValue";
import { AnimalIdInfo } from "../../../../../../interface/info.model";


//here component we add to animal food and check if this he eat,show popup,use in AddFoodAnimal components
const InputEat: React.FC<{
  hideModelFood: Function;
  dataAnimal: AnimalIdInfo;
  closeStartPopUpSelectTypeGiveEat: Function;
  closeInputEatPopUp: Function;
}> = ({
  hideModelFood,
  dataAnimal,
  closeStartPopUpSelectTypeGiveEat,
  closeInputEatPopUp,
}) => {

  
  return (
    <div>
      {/* here info if user don't know what animal eat */}
      <div className="titleHeaterHelp">
        <OverlayTriggerWhatAnimalEat dataAnimal={dataAnimal} />
      </div>

      <div className="titleHeaterInfo">
          <DontKnowWhatAnimalEat dataAnimal={dataAnimal} />
      </div>

      {/* here input value what animal eat */}
      <InputValue
        hideModelFood={hideModelFood}
        dataAnimal={dataAnimal}
        closeStartPopUpSelectTypeGiveEat={closeStartPopUpSelectTypeGiveEat()}
        closeInputEatPopUp={() => closeInputEatPopUp()}
      />
    </div>
  );
};


export default InputEat;