import { useTranslation } from "react-i18next";


const DontKnowWhatAnimalEat: React.FC<{dataAnimal:string}> = ({dataAnimal}) => {


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

    
  const choose_imageTitleChangeLanguage: any = t("choose_imageTitle", {
    returnObjects: true,
  });
  const choose_imageTitle: String = choose_imageTitleChangeLanguage.map(
    (node: any) => node.title
  );

    
  return (
    <>
      <p>
        {DontKnowWhatAnimalEatTitle} {dataAnimal} {Click_to_InfoTitle}
        <br />
        <br />
        {choose_imageTitle}
      </p>
    </>
  );
};


export default DontKnowWhatAnimalEat;