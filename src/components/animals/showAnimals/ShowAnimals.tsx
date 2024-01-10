import { useState, useEffect } from "react";
import "../../../css/home.css";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import ShowPopUpWelcomeModel from "../../tools/LoadingStyle/popUpWelcomeModel/ShowPopUpWelcomeModel";
import CardAnimals from "./showCardsAnimals/CardAnimals";
import CheckIfHaveThisAnimals from "./showCardsAnimals/checkIfHaveAnimals/CheckIfHaveThisAnimals";
import SearchAnimals from "../../search/SearchAnimals";
import { FetchData } from "../../../customHook/FetchData";
import { FetchDataSearchOption } from "../../../customHook/FetchDataSearchAnimal";
import {
  ObjectCustomHook,
  ObjectCustomHookSearch,
} from "../../../interface/info.model";



const AnimalsModals: React.FC = () => {


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

  
  const [saveOpjDataSendToCustomHook, SetSaveOpjDataSendToCustomHook] =
    useState<ObjectCustomHook>({});

  const [
    saveOpjDataSendToCustomHookSearch,
    SetSaveOpjDataSendToCustomHookSearch,
  ] = useState<ObjectCustomHookSearch>({});


  // here use customHook to fetch animal data
  const { data } = FetchData(saveOpjDataSendToCustomHook);
  const { dataSearch, loadingSearch } = FetchDataSearchOption(
    saveOpjDataSendToCustomHookSearch
  );


  //load all card animals from api
  const LoadAllAnimals = () => {

    if (currentLanguageCode == "en") {
      SetSaveOpjDataSendToCustomHook({
        typeHowUse: "englishLanguage",
      });
      SetSaveOpjDataSendToCustomHookSearch({
        typeHowUse: "SearchEnglishLanguage",
        valueSearch: "",
        infoSearch: null,
      });
    } else if (currentLanguageCode == "hw") {
      SetSaveOpjDataSendToCustomHook({
        typeHowUse: "hebrewLanguage",
      });
      SetSaveOpjDataSendToCustomHookSearch({
        typeHowUse: "SearchHebrewLanguage",
        valueSearch: "",
        infoSearch: null,
      });
    }
  };


  const filterAnimalsSearch = (searchTerm: any) => {

    if (currentLanguageCode == "en") {
      SetSaveOpjDataSendToCustomHookSearch({
        typeHowUse: "SearchEnglishLanguageID",
        valueSearch: searchTerm,
        infoSearch: data,
      });
    } else if (currentLanguageCode == "hw") {
      SetSaveOpjDataSendToCustomHookSearch({
        typeHowUse: "SearchHebrewLanguageID",
        valueSearch: searchTerm,
        infoSearch: data,
      });
    }
  };


  useEffect(() => {
    LoadAllAnimals();
  }, [currentLanguageCode]);



  return (
    <div>
      {loadingSearch ? (
        <ShowPopUpWelcomeModel />
      ) : (
        <>
          {/* component search animals */}
          <SearchAnimals onChangeCallback={filterAnimalsSearch} />

          <div className="cards-list">
            {/* show cards Animals HE or EN */}
            {dataSearch.map((animal) => (
              <CardAnimals dataAllAnimals={animal} key={animal._id} />
            ))}

            {/* check if have animals in data base , if no show message */}
            <CheckIfHaveThisAnimals
              checkIfHaveValueWhenSearchEnglishLanguage={dataSearch.length}
              animalDontFoundInDataBaseTitle={animalDontFoundInDataBaseTitle}
              animalDontFoundInDataBaseTitleSendToAdminMessage={
                animalDontFoundInDataBaseTitleSendToAdminMessage
              }
            />
          </div>
        </>
      )}
    </div>
  );
};


export default AnimalsModals;