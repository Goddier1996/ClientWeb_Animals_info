import "../../../../../css/home.css";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";



const InfoAnimal: React.FC<{ hideModelInfo: Function }> = ({ hideModelInfo }) => {
  

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


  let animalData = JSON.parse(sessionStorage.getItem("animal") as any);



  return (
    <div>
      <Modal.Body>
        <div className="titleHeaterInfo">
          {currentLanguageCode == "hw" ? (
            <h1>
              :{InfoAnimalTitle} {animalData.name}
            </h1>
          ) : (
            <h1>
              {InfoAnimalTitle} {animalData.name} :
            </h1>
          )}
        </div>

        <br />

        <div className="infoImage">
          <img src={animalData.image} alt="info animal" />
        </div>

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
            <p>{animalData.info}</p>
          </div>
        ) : (
          <div className="infoText">
            <p>{animalData.info}</p>
          </div>
        )}

        <div className="ButtonInfo">
          <Button variant="success" onClick={()=>hideModelInfo()}>
            {GoodInfoButton}
          </Button>
        </div>
      </Modal.Body>
    </div>
  );
};


export default InfoAnimal;