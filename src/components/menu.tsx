import { useState } from "react";
import "../css/home.css";
import { Button, Modal } from "react-bootstrap";
import OptionsSite from "./optionsSite/OptionsSite";
import OptionChangeLanguage from "./tools/ChangeLanguage/OptionChangeLanguage";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";



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



  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <div className="title">
      <div className="titleWeb">
        
        <div className="positionOptionChangeLanguage">
          <OptionChangeLanguage />
        </div>

        {titleAppChangeLanguage.map((node: any) => (
          <p key={node.title}>{node.title}</p>
        ))}

        <div className="help">
          {buttonMoreInfoChangeLanguage.map((node: any) => (
            <Button
              style={{cursor: "url(https://cur.cursors-4u.net/games/gam-4/gam307.ani),url(https://cur.cursors-4u.net/games/gam-4/gam307.png), pointer"}}
              key={node.title}
              size="lg"
              variant="warning"
              onClick={handleShow}
            >
              {node.title}
            </Button>
          ))}
        </div>
      </div>

      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={handleClose}
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
      >
        <Modal.Body>
          <div className="titleInfoHowUseWebSite">
            {popUpInfoTitleChangeLanguage.map((node: any) => (
              <p key={node.title}>{node.title}</p>
            ))}
          </div>

          <div className="titleInfoHowLearn">
            {popUpInfoAboutInfoChangeLanguage.map((node: any) => (
              <p key={node.title}>{node.title}</p>
            ))}
          </div>

          <div className="imgInfo">
            <AsyncImage
              src="https://i.postimg.cc/YSFWpGHh/mflx-zhpt.webp"
              style={{ width: "250px", height: "120px" }}
              Transition={Blur}
              alt="img Info"
            />
          </div>

          <br />
          <br />

          <div
            className="titleInfoHowLearnStart"
            style={
              currentLanguageCode == "hw"
                ? { textAlign: "right" }
                : { textAlign: "left" }
            }
          >
            {popUpInfoAboutHowUseAppChangeLanguage.map((node: any) => (
              <p key={node.id}>{node.title}</p>
            ))}
          </div>

          {/* choose options start or move to model component OptionsSite show all options site */}
          <div style={{ textAlign: "center" }}>
            {popUpInfoButtonLetsStartChangeLanguage.map((node: any) => (
              <Button
                key={node.title}
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
  );
};


export default Menu;