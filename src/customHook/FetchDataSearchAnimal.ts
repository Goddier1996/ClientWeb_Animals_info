import { useEffect, useState } from 'react'
import { AnimalsInfo, ObjectCustomHookSearch } from "../interface/info.model";
import {
    LoadAllCardsAnimals,
    LoadAllCardsAnimalsHebrewLanguage,
} from "../Server/LoadDataApi";
import cookies from "js-cookie";



export const FetchDataSearchOption = (funcFetchData:ObjectCustomHookSearch) => {


    const [dataSearch, setDataSearch] = useState<AnimalsInfo[]>([]);
    const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
    // const [errorSearch, setErrorSearch] = useState(null);
    const currentLanguageCode = cookies.get("i18next") || "en";


    const fetchData = () => {

        setLoadingSearch(true);

        switch (funcFetchData.typeHowUse) {
      
          // loading all animals again
          case "LoadingData":
            switch (currentLanguageCode) {
              case "en":
                LoadAllCardsAnimals()
                .then((dataCategory) => setDataSearch(dataCategory))
                .then(() => setLoadingSearch(false))
                .catch((err) => setLoadingSearch(true))
                break;
              
              case "hw":
                LoadAllCardsAnimalsHebrewLanguage()
                .then((dataCategory) => setDataSearch(dataCategory))
                .then(() => setLoadingSearch(false))
                .catch((err) => setLoadingSearch(true))
              break;
            }
            break;
          
          // Search animals, when we input value in search box
          case "searchData":

            switch (currentLanguageCode) {
              case "en":
                setDataSearch(funcFetchData.infoSearch.filter((animal: AnimalsInfo) =>
                  animal.title.toLowerCase().includes(funcFetchData.valueSearch || "".toLowerCase())))
                setLoadingSearch(false)
                break;
              
              case "hw":
                setDataSearch(funcFetchData.infoSearch.filter((animal: AnimalsInfo) =>
                  animal.title.toLowerCase().includes(funcFetchData.valueSearch || "".toLowerCase())))
                setLoadingSearch(false)
                break;
            }
            break;
              
  
          default:
              // setError(`${error} Could not Fetch Data `);
              setLoadingSearch(true);
      };
    }


  useEffect(() => {     
    fetchData();
  }, [funcFetchData, currentLanguageCode]);

  return { dataSearch, loadingSearch };
}