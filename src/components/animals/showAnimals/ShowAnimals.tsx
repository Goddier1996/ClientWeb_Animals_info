import { useState, useEffect } from "react";
import "../../../css/home.css";
import {
  LoadAllCardsAnimals,
  LoadAllCardsAnimalsHebrewLanguage,
} from "../../../Server/LoadDataApi";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import ShowPopUpWelcomeModel from "../../tools/ShowPopUpWelcomeModel";
import CardAnimals from "./showCardsAnimals/CardAnimals";
import CheckIfHaveThisAnimals from "./showCardsAnimals/checkIfHaveAnimals/CheckIfHaveThisAnimals";
import ModelGetFood from "./showCardsAnimals/ModelGetFood";
import ModelInfoAnimal from "./showCardsAnimals/infoAnimal/ModelInfoAnimal";
import {AnimalsInfo} from "../../../interface/info.model"



const AnimalsModals: React.FC<{ Search: string }> = ({ Search }) => {


  const [idAnimal, setIdAnimal] = useState<string>("");


  // change language en or hw
  const { t } = useTranslation(["home"]);
  const currentLanguageCode = cookies.get("i18next") || "en";


  const animalDontFoundInDataBaseTitleChangeLanguage: any = t(
    "animalDontFoundInDataBaseTitle",
    {
      returnObjects: true,
    }
  );
  const animalDontFoundInDataBaseTitle: String =
    animalDontFoundInDataBaseTitleChangeLanguage.map((node: any) => node.title);

  
  
  const animalDontFoundInDataBaseTitleSendToAdminMessageChangeLanguage: any = t(
    "animalDontFoundInDataBaseTitleSendToAdminMessage",
    {
      returnObjects: true,
    }
  );
  const animalDontFoundInDataBaseTitleSendToAdminMessage: String =
    animalDontFoundInDataBaseTitleSendToAdminMessageChangeLanguage.map(
      (node: any) => node.title
    );

  
  
  //popup open or close , sound animal show popUp
  const [showGetFoodAnimal, setShowGetFoodAnimal] = useState<boolean>(false);
  const handleCloseGetFoodAnimal = () => setShowGetFoodAnimal(false);
  const handleShowGetFoodAnimal = () => setShowGetFoodAnimal(true);

  //popup open or close , show info about animal
  const [showShowInfoAnimal, setShowShowInfoAnimal] = useState<boolean>(false);
  const handleCloseInfoAnimal = () => setShowShowInfoAnimal(false);
  const handleShowShowInfoAnimal = () => setShowShowInfoAnimal(true);

  //save for show all models animals from nodejs json file
  const [notesEnglishLanguage, SetNotesEnglishLanguage] = useState<AnimalsInfo[]>([]);
  const [notesHebrewLanguage, SetNotesHebrewLanguage] = useState<AnimalsInfo[]>([]);

  const [
    checkIfHaveValueWhenSearchEnglishLanguage,
    SetCheckIfHaveValueWhenSearchEnglishLanguage,
  ] = useState<AnimalsInfo[]>([]);

  const [
    checkIfHaveValueWhenSearchHebrewLanguage,
    SetCheckIfHaveValueWhenSearchHebrewLanguage,
  ] = useState<AnimalsInfo[]>([]);

  const [loading, setLoading] = useState<boolean>(false);



  //load all card animals from api
  const LoadAllNotes = async () => {

    try {
      setLoading(true);

      SetNotesEnglishLanguage(await LoadAllCardsAnimals());
      SetNotesHebrewLanguage(await LoadAllCardsAnimalsHebrewLanguage());

      setLoading(false); // Stop loading
    } catch (error) {
      setLoading(false); // Stop loading in case of error
      console.error(error);
    }
  };



  //here we save data animal 
  const start = async (id:string) => {

    setIdAnimal(id);

    //show popup
    handleShowGetFoodAnimal();
  };



  //show popup about Animal show info
  const clickToImageForInfo = async (id:string) => {

    setIdAnimal(id);

    handleShowShowInfoAnimal();
  };



  useEffect(() => {

    LoadAllNotes();

  }, []);


// Saving language according to user's choice
  useEffect(() => {

    SetCheckIfHaveValueWhenSearchEnglishLanguage(
      notesEnglishLanguage.filter((item: AnimalsInfo) => {
        return item.title.toLowerCase().startsWith(Search);
      })
    );

    SetCheckIfHaveValueWhenSearchHebrewLanguage(
      notesHebrewLanguage.filter((item: AnimalsInfo) => {
        return item.title.toLowerCase().startsWith(Search);
      })
    );
  });



  return (
    <div>
      {loading ? (
       <ShowPopUpWelcomeModel/>
      )
        :
        (
        <div className="cards-list">
          
          {/* show cards Animals HE or EN */}
          {currentLanguageCode == "en"
              ? checkIfHaveValueWhenSearchEnglishLanguage.map((animal) => (
                <>
                  <CardAnimals dataAllAnimals={animal} clickToImageForInfo={clickToImageForInfo} start={start} />
                </>
              ))
              : checkIfHaveValueWhenSearchHebrewLanguage.map((animal) => (
                <>
                <CardAnimals dataAllAnimals={animal} clickToImageForInfo={clickToImageForInfo} start={start} />
                </>
              ))}

            
            {/* check if have animals in data base , if no show message */}
            <CheckIfHaveThisAnimals
              checkIfHaveValueWhenSearchEnglishLanguage={checkIfHaveValueWhenSearchEnglishLanguage.length}
              checkIfHaveValueWhenSearchHebrewLanguage={checkIfHaveValueWhenSearchHebrewLanguage.length}
              animalDontFoundInDataBaseTitle={animalDontFoundInDataBaseTitle}
              animalDontFoundInDataBaseTitleSendToAdminMessage={animalDontFoundInDataBaseTitleSendToAdminMessage}/>
        </div>
      )}

      

      {/* get a food animal */}
      <div>
        <ModelGetFood showGetFoodAnimal={showGetFoodAnimal} handleCloseGetFoodAnimal={()=>handleCloseGetFoodAnimal} idAnimal={idAnimal }/>
      </div>

      
      {/* show animal info model */}
      <div>
        <ModelInfoAnimal showShowInfoAnimal={showShowInfoAnimal} hideModelInfoAnimal={() => handleCloseInfoAnimal} idAnimal={idAnimal } />
      </div>
      
    </div>
  );
};



export default AnimalsModals;