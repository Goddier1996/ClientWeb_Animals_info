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
import {AnimalIdInfo} from "../../../../../interface/info.model"
import { AsyncImage } from 'loadable-image'
import { Blur } from 'transitions-kit'



const InfoAnimal: React.FC<{ hideModelInfo: Function; idAnimal: string }> = ({
  hideModelInfo,
  idAnimal,
}) => {


  // change language en or hw
  const { t } = useTranslation(["home"]);
  const currentLanguageCode = cookies.get("i18next") || "en";

  const InfoAnimalTitleChangeLanguage: any = t("InfoAnimal", {
    returnObjects: true,
  });
  const InfoAnimalTitle: String = InfoAnimalTitleChangeLanguage.map(
    (node: any) => node.title
  );

  const GoodInfoButtonChangeLanguage: any = t("GoodInfoButton", {
    returnObjects: true,
  });
  const GoodInfoButton: String = GoodInfoButtonChangeLanguage.map(
    (node: any) => node.title
  );


  const [dataAnimalInfo, setDataAnimalInfo] = useState<AnimalIdInfo>({});
  const [dataAnimalInfoHebrewLanguage, setDataAnimalInfoHebrewLanguage] =
    useState<AnimalIdInfo>({});

  const [loading, setLoading] = useState<boolean>(false);

  

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
              <AsyncImage
                  src={dataAnimalInfoHebrewLanguage.infoImage}
                  style={{ width: "100%", height: 230}}
                  Transition={Blur}
                  alt="info animal"
                />
            </div>
          ) : (
            <div className="infoImage">
                <AsyncImage
                  src={dataAnimalInfo.infoImage}
                  style={{ width: "100%", height: 230}}
                  Transition={Blur}
                  alt="info animal"
                />
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
              <Button variant="success"
                onClick={() => hideModelInfo()}
                style={{cursor: "url(https://cur.cursors-4u.net/games/gam-4/gam307.ani),url(https://cur.cursors-4u.net/games/gam-4/gam307.png), pointer"}}
              >
              {GoodInfoButton}
            </Button>
          </div>
        </Modal.Body>
      )}
    </div>
  );
};


export default InfoAnimal;