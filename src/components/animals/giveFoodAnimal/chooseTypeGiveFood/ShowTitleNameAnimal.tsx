import { useTranslation } from "react-i18next";


const ShowTitleNameAnimal: React.FC<{idAnimal:any}> = ({ idAnimal}) => {
    
  // change language en or hw
  const { t } = useTranslation(["home"]);

    
  const Hi_I_AmTitleChangeLanguage: any = t("Hi_I_AmTitle", {
    returnObjects: true,
  });
  const InfoAnimalTitle: any = Hi_I_AmTitleChangeLanguage.map(
    (node: any) => node.title
  );

    
  const i_am_hungryTitleChangeLanguage: any = t("i_am_hungryTitle", {
    returnObjects: true,
  });
  const i_am_hungryTitle: any = i_am_hungryTitleChangeLanguage.map(
    (node: any) => node.title
  );

    
  const Give_me_foodTitleChangeLanguage: any = t("Give_me_foodTitle", {
    returnObjects: true,
  });
  const Give_me_foodTitle: any = Give_me_foodTitleChangeLanguage.map(
    (node: any) => node.title
  );

    

  return (
    <>
      <h1>
        {InfoAnimalTitle }
        
        {" "}{idAnimal.title},{" "}
        
        {i_am_hungryTitle}{" "}
        <img
          src="https://i.postimg.cc/6qx8029p/vecteezy-pets-bowl-food.jpg"
          alt="image animal"
        />{" "}
        {Give_me_foodTitle}{" "}
      </h1>
    </>
  );
};


export default ShowTitleNameAnimal;