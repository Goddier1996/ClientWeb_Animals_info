import { useEffect, useState } from 'react'
import { AnimalIdInfo, ObjectCustomHookIdInfo } from "../interface/info.model";
import {
    LoadInfoIdAnimal,
    LoadAnimalInfoIdHebrewLanguage,
} from "../Server/LoadDataApi";
  

export const FetchDataInfoId = (funcFetchData:ObjectCustomHookIdInfo) => {


    const [data, setData] = useState<AnimalIdInfo>({});
    const [loading, setLoading] = useState<boolean>(false);
    // const [error, setError] = useState(null);


    const fetchData = () => {

        setLoading(true);
      
        switch (funcFetchData.typeHowUse) {
      
          case "englishLanguage":
            LoadInfoIdAnimal(funcFetchData.id||"")
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => console.log(err))
            break;
            
          case "hebrewLanguage":
            LoadAnimalInfoIdHebrewLanguage(funcFetchData.id||"")
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => console.log(err))
            break;
      
          default:
            // setError(`${error} Could not Fetch Data `);
            setLoading(false);
        }
      };


    useEffect(() => {
        
        fetchData();
    },[funcFetchData])

    return { data, loading };
}