import { useTranslation } from "react-i18next";
import {AnimalIdInfo} from "../../../../../../interface/info.model"


const DontKnowWhatAnimalEat: React.FC<{dataAnimal:AnimalIdInfo}> = ({dataAnimal}) => {


  const { t } = useTranslation(["home"]);

  const DontKnowWhatAnimalEatTitleChangeLanguage: any = t(
    "DontKnowWhatAnimalEatTitle",
    {
      returnObjects: true,
    }
  );
  const DontKnowWhatAnimalEatTitle: String =
    DontKnowWhatAnimalEatTitleChangeLanguage.map((node: any) => node.title);


  const Click_to_InfoTitleChangeLanguage: any = t("Click_to_InfoTitle", {
    returnObjects: true,
  });
  const Click_to_InfoTitle: String = Click_to_InfoTitleChangeLanguage.map(
    (node: any) => node.title
  );

    
  return (
    <>
      <p>
        {DontKnowWhatAnimalEatTitle} {dataAnimal.title} {Click_to_InfoTitle}
      </p>
    </>
  );
};


export default DontKnowWhatAnimalEat;