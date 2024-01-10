import { useEffect, useState } from 'react'
import { AnimalsInfo, ObjectCustomHook } from "../interface/info.model";
import {
    LoadAllCardsAnimals,
    LoadAllCardsAnimalsHebrewLanguage,
} from "../Server/LoadDataApi";
  

export const FetchData = (funcFetchData:ObjectCustomHook) => {


    const [data, setData] = useState<AnimalsInfo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    // const [error, setError] = useState(null);


    const fetchData = () => {

        setLoading(true);
      
        switch (funcFetchData.typeHowUse) {
      
          case "englishLanguage":
            LoadAllCardsAnimals()
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
            
          case "hebrewLanguage":
            LoadAllCardsAnimalsHebrewLanguage()
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
      
          default:
            // setError(`${error} Could not Fetch Data `);
            setLoading(true);
        }
      };


    useEffect(() => {
        
        fetchData();
    },[funcFetchData])

    return { data, loading };
}