import cookies from "js-cookie";
import DontKnowWhatAnimalEat from "../tools/DontKnowWhatAnimalEat";
import SelectImg from "./SelectImg";
import OverlayTriggerWhatAnimalEat from "../tools/OverlayTriggerWhatAnimalEat";



const FotoEat: React.FC = () => {


  // change language en or hw
  const currentLanguageCode = cookies.get("i18next") || "en";


  return (
    <div>

      {/* here info if user don't know what animal eat */}
      <div className="titleHeaterHelp">
         <OverlayTriggerWhatAnimalEat/>
      </div>

      
      <div className="titleHeaterInfo">
        {(currentLanguageCode == "hw") ?
            <DontKnowWhatAnimalEat/>
          :
          <DontKnowWhatAnimalEat/>
      }
      </div>

      <br />

      <div className="chioseImage">
        <SelectImg eatOrNo={"Eat"} />
        <SelectImg eatOrNo={"Not Eat"} />
      </div>

      <br />
      
    </div>
  );
};


export default FotoEat;