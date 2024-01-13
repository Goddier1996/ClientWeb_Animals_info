import "./heater.css";
import { Button, Modal } from "react-bootstrap";
import OptionChangeLanguage from "../tools/ChangeLanguage/OptionChangeLanguage";
import { useTranslation } from "react-i18next";
import ShowModelClickMoreInfo from "./ShowModelClickMoreInfo";
import { ShowModelPopUp } from "../../customHook/ShowModelPopUp";



const Menu: React.FC = () => {


  // change language en or hw
  const { t } = useTranslation(["home"]);

  const titleAppChangeLanguage: any = t("titleApp", { returnObjects: true });

  const buttonMoreInfoChangeLanguage: any = t("ButtonMoreInfo", {
    returnObjects: true,
  });


  // show model more info custom hook
  const { show, handleShow, handleClose } = ShowModelPopUp();


  return (
    <>
      <div className="title">

        <div className="mainBackground"></div>

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
                style={{
                  cursor:
                    "url(https://cur.cursors-4u.net/games/gam-4/gam307.ani),url(https://cur.cursors-4u.net/games/gam-4/gam307.png), pointer",
                }}
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
      </div>

      
      {/* popup more info */}
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
      >
        <ShowModelClickMoreInfo handleClose={() => handleClose()} />
      </Modal>
    </>
  );
};


export default Menu;