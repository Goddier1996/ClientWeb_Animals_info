import { useTranslation } from "react-i18next";


const ShowPopUpWelcomeModel: React.FC = () => {


  // change language en or hw
  const { t } = useTranslation(["home"]);


  const Welcome_To_Safari_popUpChangeLanguage: any = t(
    "Welcome_To_Safari_popUp",
    {
      returnObjects: true,
    }
  );
  const Welcome_To_Safari_popUp: String =
    Welcome_To_Safari_popUpChangeLanguage.map((node: any) => node.title);

  
  
  return (
    <>
      <div className="popUpHome">
        <h1>{Welcome_To_Safari_popUp}</h1>
        <img
          src="https://i.postimg.cc/Fs3XsmRW/popup.webp"
          alt="popupWelcome"
        />
      </div>
    </>
  );
};


export default ShowPopUpWelcomeModel;