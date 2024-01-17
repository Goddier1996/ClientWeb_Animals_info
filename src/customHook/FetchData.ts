import { useEffect, useState } from 'react'
import { AnimalsInfo } from "../interface/info.model";
import {
    LoadAllCardsAnimals,
    LoadAllCardsAnimalsHebrewLanguage,
} from "../Server/LoadDataApi";
import cookies from "js-cookie";



export const FetchData = () => {

  const currentLanguageCode = cookies.get("i18next") || "en";

    const [data, setData] = useState<AnimalsInfo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    // const [error, setError] = useState(null);


    const fetchData = () => {

        setLoading(true);
      
        switch (currentLanguageCode) {
      
          case "en":
            LoadAllCardsAnimals()
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
            
          case "hw":
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
  }, [currentLanguageCode]);

    return { data, loading };
}