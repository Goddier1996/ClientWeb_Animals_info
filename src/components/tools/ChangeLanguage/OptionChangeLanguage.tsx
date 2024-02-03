import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import "../../heater/heater.css";
import ShowAsyncImage from "../AsyncImages/ShowAsyncImage";



const OptionChangeLanguage: React.FC = () => {


  // change language en or hw
  const { i18n, t } = useTranslation(["home"]);
  const currentLanguageCode = cookies.get("i18next") || "en";

  const SelectLanguageTitleChangeLanguage: any = t("SelectLanguageTitle", {
    returnObjects: true,
  });
  const SelectLanguageTitle: String = SelectLanguageTitleChangeLanguage.map(
    (node: any) => node.title
  );


  const onClickLanguageChange = (e: string) => {
    i18n.changeLanguage(e);
  };


  return (
    <div className="styleOptionChangeLanguage">
      <p>{SelectLanguageTitle}</p>

      <div className="selectImgLanguage">
        {/* show English flag */}
        <div
          style={{
            opacity: currentLanguageCode == "hw" ? "0.9" : "",
            cursor: currentLanguageCode == "en" ? "no-drop" : "",
          }}
        >
          <ShowAsyncImage
            imgShow={"https://i.postimg.cc/WzqGJWRw/usx.webp"}
            widthImg={currentLanguageCode == "en" ? "50px" : "35px"}
            heightImg={currentLanguageCode == "en" ? "50px" : "35px"}
            altImage={"en"}
            typeAnimation={"Fade"}
            activeFunction={
              currentLanguageCode == "hw"
                ? () => onClickLanguageChange("en")
                : undefined
            }
          />
        </div>

        
        {/* show Hebrew flag */}
        <div
          style={{
            opacity: currentLanguageCode == "en" ? "0.9" : "",
            cursor: currentLanguageCode == "hw" ? "no-drop" : "",
          }}
        >
          <ShowAsyncImage
            imgShow={"https://i.postimg.cc/9MdR36jS/il.webp"}
            widthImg={currentLanguageCode == "hw" ? "54px" : "40px"}
            heightImg={currentLanguageCode == "hw" ? "41px" : "40px"}
            altImage={"hw"}
            typeAnimation={"Fade"}
            activeFunction={
              currentLanguageCode == "en"
                ? () => onClickLanguageChange("hw")
                : undefined
            }
          />
        </div>
      </div>
    </div>
  );
};


export default OptionChangeLanguage;