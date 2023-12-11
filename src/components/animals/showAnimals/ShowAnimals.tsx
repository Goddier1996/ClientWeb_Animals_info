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



const AnimalsModals: React.FC<{ Search: string }> = ({ Search }) => {


  // change language en or hw
  const { t } = useTranslation(["home"]);
  const currentLanguageCode = cookies.get("i18next") || "en";


  
  const animalDontFoundInDataBaseTitleChangeLanguage: any = t(
    "animalDontFoundInDataBaseTitle",
    {
      returnObjects: true,
    }
  );

  const animalDontFoundInDataBaseTitle: any =
    animalDontFoundInDataBaseTitleChangeLanguage.map((node: any) => node.title);

  
  const animalDontFoundInDataBaseTitleSendToAdminMessageChangeLanguage: any = t(
    "animalDontFoundInDataBaseTitleSendToAdminMessage",
    {
      returnObjects: true,
    }
  );

  const animalDontFoundInDataBaseTitleSendToAdminMessage: any =
    animalDontFoundInDataBaseTitleSendToAdminMessageChangeLanguage.map(
      (node: any) => node.title
    );

  
  //popup open or close , sound animal show popUp
  const [showGetFoodAnimal, setShowGetFoodAnimal] = useState(false);
  const handleCloseGetFoodAnimal = () => setShowGetFoodAnimal(false);
  const handleShowGetFoodAnimal = () => setShowGetFoodAnimal(true);

  //popup open or close , show info about animal
  const [showShowInfoAnimal, setShowShowInfoAnimal] = useState(false);
  const handleCloseInfoAnimal = () => setShowShowInfoAnimal(false);
  const handleShowShowInfoAnimal = () => setShowShowInfoAnimal(true);

  //save for show all models animals from nodejs json file
  const [notesEnglishLanguage, SetNotesEnglishLanguage] = useState([] as any[]);
  const [notesHebrewLanguage, SetNotesHebrewLanguage] = useState([] as any[]);

  const [
    checkIfHaveValueWhenSearchEnglishLanguage,
    SetCheckIfHaveValueWhenSearchEnglishLanguage,
  ] = useState([] as any[]);


  const [
    checkIfHaveValueWhenSearchHebrewLanguage,
    SetCheckIfHaveValueWhenSearchHebrewLanguage,
  ] = useState([] as any[]);


  const [loading, setLoading] = useState(false);



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



  //here we save data animal from nodeJs database to session storage,and show popup where we input value what animal eat
  const start = async (
    sound: string,
    name: string,
    eat: string,
    notEatImage: string,
    eatImage: string
  ) => {
    let animal = {
      name: name,
      eat: eat,
      sound: sound,
      eatImage: eatImage,
      notEatImage: notEatImage,
    };

    sessionStorage.setItem("animal", JSON.stringify(animal));

    //show popup
    handleShowGetFoodAnimal();
  };



  //here we save data animal from nodeJs json file to session storage,and show popup about Animal show info
  const clickToImageForInfo = async (
    info: string,
    imageInfo: string,
    name: string
  ) => {
    let animal = {
      name: name,
      info: info,
      image: imageInfo,
    };

    sessionStorage.setItem("animal", JSON.stringify(animal));

    handleShowShowInfoAnimal();
  };



  useEffect(() => {

    LoadAllNotes();

  }, []);



  useEffect(() => {

    SetCheckIfHaveValueWhenSearchEnglishLanguage(
      notesEnglishLanguage.filter((item: any) => {
        return item.title.toLowerCase().startsWith(Search);
      })
    );

    SetCheckIfHaveValueWhenSearchHebrewLanguage(
      notesHebrewLanguage.filter((item: any) => {
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
              ? checkIfHaveValueWhenSearchEnglishLanguage.map((node) => (
                <>
                <CardAnimals node={node} clickToImageForInfo={clickToImageForInfo} start={start}/>
                </>
              ))
              : checkIfHaveValueWhenSearchHebrewLanguage.map((node) => (
                <>
                <CardAnimals node={node} clickToImageForInfo={clickToImageForInfo} start={start}/>
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
        <ModelGetFood showGetFoodAnimal={showGetFoodAnimal} handleCloseGetFoodAnimal={()=>handleCloseGetFoodAnimal} />
      </div>

      
      {/* show animal info model */}
      <div>
        <ModelInfoAnimal showShowInfoAnimal={showShowInfoAnimal} hideModelInfoAnimal={()=>handleCloseInfoAnimal}/>
      </div>
      
    </div>
  );
};



export default AnimalsModals;