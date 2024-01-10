import { useEffect, useState } from 'react'
import { AnimalsInfo, ObjectCustomHookSearch } from "../interface/info.model";
import {
    LoadAllCardsAnimals,
    LoadAllCardsAnimalsHebrewLanguage,
} from "../Server/LoadDataApi";
  

export const FetchDataSearchOption = (funcFetchData:ObjectCustomHookSearch) => {


    const [dataSearch, setDataSearch] = useState<AnimalsInfo[]>([]);
    const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
    // const [errorSearch, setErrorSearch] = useState(null);


    const fetchData = () => {

        setLoadingSearch(true);

        switch (funcFetchData.typeHowUse) {
      
          case "SearchEnglishLanguage":
            LoadAllCardsAnimals()
              .then((dataCategory) => setDataSearch(dataCategory))
              .then(() => setLoadingSearch(false))
              .catch((err) => console.log(err))
            break;
              
          case "SearchHebrewLanguage":
            LoadAllCardsAnimalsHebrewLanguage()
              .then((dataCategory) => setDataSearch(dataCategory))
              .then(() => setLoadingSearch(false))
              .catch((err) => console.log(err))
            break;
          
          case "SearchEnglishLanguageID":
            setDataSearch(funcFetchData.infoSearch.filter((animal: AnimalsInfo) =>
              animal.title.toLowerCase().includes(funcFetchData.valueSearch||"".toLowerCase())))
            setLoadingSearch(false)
            break;
          
          case "SearchHebrewLanguageID":
            setDataSearch(funcFetchData.infoSearch.filter((animal: AnimalsInfo) =>
              animal.title.toLowerCase().includes(funcFetchData.valueSearch||"".toLowerCase())))
            setLoadingSearch(false)
            break;
          
          default:
              // setError(`${error} Could not Fetch Data `);
              setLoadingSearch(false);
          };
    }


    useEffect(() => {
        
        fetchData();
    },[funcFetchData])

    return { dataSearch, loadingSearch };
}