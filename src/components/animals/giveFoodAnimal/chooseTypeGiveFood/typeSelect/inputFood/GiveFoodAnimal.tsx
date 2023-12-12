import cookies from "js-cookie";
import DontKnowWhatAnimalEat from "../tools/DontKnowWhatAnimalEat";
import OverlayTriggerWhatAnimalEat from "../tools/OverlayTriggerWhatAnimalEat";
import InputValue from "./InputValue";


//here component we add to animal food and check if this he eat,show popup,use in AddFoodAnimal components
const InputEat: React.FC<{ hideModelFood: Function,dataAnimal:any }> = ({hideModelFood,dataAnimal}) => {


  // change language en or hw
  const currentLanguageCode = cookies.get("i18next") || "en";


  return (
    <div>

      {/* here info if user don't know what animal eat */}
      <div className="titleHeaterHelp">
        <OverlayTriggerWhatAnimalEat dataAnimal={dataAnimal} />
      </div>

      

      <div className="titleHeaterInfo">
        {(currentLanguageCode == "hw") ?
          <DontKnowWhatAnimalEat dataAnimal={dataAnimal.title } />
          :
          <DontKnowWhatAnimalEat dataAnimal={dataAnimal.title }/>
      }
      </div>

      {/* here input value what animal eat */}
      <br />
      <InputValue hideModelFood={ hideModelFood} dataAnimal={dataAnimal} />
      
    </div>
  );
};


export default InputEat;