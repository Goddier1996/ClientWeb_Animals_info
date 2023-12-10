import { useState } from "react";
import "../css/home.css";
import { Button, Modal } from "react-bootstrap";
import OptionsSite from "./optionsSite";
import OptionChangeLanguage from "./optionChangeLanguage";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";



const Menu: React.FC = () => {


  // change language en or hw
  const { t } = useTranslation(["home"]);
  const currentLanguageCode = cookies.get("i18next") || "en";

  const titleAppChangeLanguage: any = t("titleApp", { returnObjects: true });

  const buttonMoreInfoChangeLanguage: any = t("ButtonMoreInfo", {
    returnObjects: true,
  });

  const popUpInfoTitleChangeLanguage: any = t("popUpInfoTitle", {
    returnObjects: true,
  });

  const popUpInfoAboutInfoChangeLanguage: any = t("popUpInfoAboutInfo", {
    returnObjects: true,
  });

  const popUpInfoAboutHowUseAppChangeLanguage: any = t(
    "popUpInfoAboutHowUseApp",
    { returnObjects: true }
  );

  const popUpInfoButtonLetsStartChangeLanguage: any = t(
    "popUpInfoButtonLetsStart",
    { returnObjects: true }
  );


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="title">

      <div className="positionOptionChangeLanguage">
        <OptionChangeLanguage /> 
      </div>

      <div className="titleWeb" >
        {titleAppChangeLanguage.map((node: any) => (
          <p>{node.title}</p>
        ))}
      </div>

      <div className="help">
        {buttonMoreInfoChangeLanguage.map((node: any) => (
          <Button size="sm" variant="warning" onClick={handleShow}>
            {node.title}
          </Button>
        ))}

        <Modal
          show={show}
          aria-labelledby="contained-modal-title-vcenter"
          onHide={handleClose}
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
        >
          <Modal.Body>
            <div className="titleInfoHowUseWebSite">
              {popUpInfoTitleChangeLanguage.map((node: any) => (
                <p>{node.title}</p>
              ))}
            </div>

            <div className="titleInfoHowLearn">
              {popUpInfoAboutInfoChangeLanguage.map((node: any) => (
                <p>{node.title}</p>
              ))}
            </div>

            <div className="imgInfo">
              <img src="https://i.postimg.cc/XqhBtVNY/mflx-zhpt-220613.jpg"></img>
            </div>

            <br />
            <br />

            <div className="titleInfoHowLearnStart" style={ currentLanguageCode=="hw" ? { textAlign:'right'} : { textAlign:'left'}}>
              {popUpInfoAboutHowUseAppChangeLanguage.map((node: any) => (
                <p key={node.id}>{node.title}</p>
              ))}
            </div>

            
            {/* choose options start or move to model component OptionsSite show all options site */}
            <div style={{ textAlign: "center" }}>
              {popUpInfoButtonLetsStartChangeLanguage.map((node: any) => (
                <Button
                  style={{ margin: "3%" }}
                  variant="success"
                  onClick={handleClose}
                >
                  {node.title}
                </Button>
              ))}

              <OptionsSite />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Menu;