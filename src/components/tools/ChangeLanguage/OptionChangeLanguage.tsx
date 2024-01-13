import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import "../../heater/heater.css"


const OptionChangeLanguage: React.FC=()=> {


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

      <img
        onClick={() => onClickLanguageChange("en")}
        src="https://i.postimg.cc/WzqGJWRw/usx.webp"
        style={
          currentLanguageCode == "en"
            ? { height: "45px", width: "45px" }
            : { height: "34px", width: "34px", opacity: "0.8" }
        }
        alt="en"
      />
      <img
        onClick={() => onClickLanguageChange("hw")}
        src="https://i.postimg.cc/9MdR36jS/il.webp"
        style={
          currentLanguageCode == "hw"
            ? { height: "52px", width: "52px" }
            : { height: "44px", width: "44px", opacity: "0.8" }
        }
        alt="hw"
      />
    </div>
  );
}


export default OptionChangeLanguage;