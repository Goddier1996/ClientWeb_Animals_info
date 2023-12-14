import cookies from "js-cookie";
import DontKnowWhatAnimalEat from "../tools/DontKnowWhatAnimalEat";
import SelectImg from "./SelectImg";
import OverlayTriggerWhatAnimalEat from "../tools/OverlayTriggerWhatAnimalEat";
import {AnimalIdInfo} from "../../../../../../interface/info.model"


const FotoEat: React.FC<{dataAnimal:AnimalIdInfo}> = ({dataAnimal}) => {


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
          <DontKnowWhatAnimalEat dataAnimal={dataAnimal } />
          :
          <DontKnowWhatAnimalEat dataAnimal={dataAnimal }/>
      }
      </div>

      <br />

      <div className="chioseImage">
        <SelectImg eatOrNo={"Eat"} dataAnimal={ dataAnimal} />
        <SelectImg eatOrNo={"Not Eat"} dataAnimal={ dataAnimal} />
      </div>

      <br />
      
    </div>
  );
};


export default FotoEat;