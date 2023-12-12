import "../../../../../css/home.css";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { useEffect, useState } from "react";
import {
  LoadInfoIdAnimal,
  LoadAnimalInfoIdHebrewLanguage,
} from "../../../../../Server/LoadDataApi";
import Loading from "../../../../tools/Loading";



const InfoAnimal: React.FC<{ hideModelInfo: Function; idAnimal: any }> = ({
  hideModelInfo,
  idAnimal,
}) => {


  // change language en or hw
  const { t } = useTranslation(["home"]);
  const currentLanguageCode = cookies.get("i18next") || "en";


  const InfoAnimalTitleChangeLanguage: any = t("InfoAnimal", {
    returnObjects: true,
  });
  const InfoAnimalTitle: any = InfoAnimalTitleChangeLanguage.map(
    (node: any) => node.title
  );


  const GoodInfoButtonChangeLanguage: any = t("GoodInfoButton", {
    returnObjects: true,
  });
  const GoodInfoButton: any = GoodInfoButtonChangeLanguage.map(
    (node: any) => node.title
  );


  const [dataAnimalInfo, setDataAnimalInfo] = useState<any>([]);
  const [dataAnimalInfoHebrewLanguage, setDataAnimalInfoHebrewLanguage] =
    useState<any>([]);

  
  const [loading, setLoading] = useState(false);


  const loadAnimalIdInfo = async () => {

    try {
      setLoading(true);

      setDataAnimalInfo(await LoadInfoIdAnimal(idAnimal));
      setDataAnimalInfoHebrewLanguage(
        await LoadAnimalInfoIdHebrewLanguage(idAnimal)
      );

      setLoading(false); // Stop loading
    } catch (error) {
      setLoading(false); // Stop loading in case of error
      console.error(error);
    }
  };



  useEffect(() => {
    
    loadAnimalIdInfo();

  }, [idAnimal]);



  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Modal.Body>
          <div className="titleHeaterInfo">
            {currentLanguageCode == "hw" ? (
              <h1>
                :{InfoAnimalTitle} {dataAnimalInfoHebrewLanguage.title}
              </h1>
            ) : (
              <h1>
                {InfoAnimalTitle} {dataAnimalInfo.title} :
              </h1>
            )}
          </div>

          <br />

          {currentLanguageCode == "hw" ? (
            <div className="infoImage">
              <img
                src={dataAnimalInfoHebrewLanguage.infoImage}
                alt="info animal"
              />
            </div>
          ) : (
            <div className="infoImage">
              <img src={dataAnimalInfo.infoImage} alt="info animal" />
            </div>
          )}

          <br />

          {currentLanguageCode == "hw" ? (
            <div
              className="infoText"
              style={
                currentLanguageCode == "hw"
                  ? { textAlign: "right" }
                  : { textAlign: "left" }
              }
            >
              <p>{dataAnimalInfoHebrewLanguage.infoAnimal}</p>
            </div>
          ) : (
            <div className="infoText">
              <p>{dataAnimalInfo.infoAnimal}</p>
            </div>
          )}

          <div className="ButtonInfo">
            <Button variant="success" onClick={() => hideModelInfo()}>
              {GoodInfoButton}
            </Button>
          </div>
        </Modal.Body>
      )}
    </div>
  );
};


export default InfoAnimal;