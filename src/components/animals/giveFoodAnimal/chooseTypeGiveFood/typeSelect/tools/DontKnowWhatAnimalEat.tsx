import { useTranslation } from "react-i18next";


const DontKnowWhatAnimalEat: React.FC = () => {


  const { t } = useTranslation(["home"]);

  const DontKnowWhatAnimalEatTitleChangeLanguage: any = t(
    "DontKnowWhatAnimalEatTitle",
    {
      returnObjects: true,
    }
  );
  const DontKnowWhatAnimalEatTitle: any =
    DontKnowWhatAnimalEatTitleChangeLanguage.map((node: any) => node.title);


  const Click_to_InfoTitleChangeLanguage: any = t("Click_to_InfoTitle", {
    returnObjects: true,
  });
  const Click_to_InfoTitle: any = Click_to_InfoTitleChangeLanguage.map(
    (node: any) => node.title
  );

    
  const choose_imageTitleChangeLanguage: any = t("choose_imageTitle", {
    returnObjects: true,
  });
  const choose_imageTitle: any = choose_imageTitleChangeLanguage.map(
    (node: any) => node.title
  );

    
  let animalData = JSON.parse(sessionStorage.getItem("animal") as any);

    
    
  return (
    <>
      <p>
        {DontKnowWhatAnimalEatTitle} {animalData.name} {Click_to_InfoTitle}
        <br />
        <br />
        {choose_imageTitle}
      </p>
    </>
  );
};



export default DontKnowWhatAnimalEat;