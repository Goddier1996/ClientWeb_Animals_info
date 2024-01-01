import { useState } from "react";
import "../../css/home.css";
import { Button, Modal } from "react-bootstrap";
import OptionChangeLanguage from "../tools/ChangeLanguage/OptionChangeLanguage";
import { useTranslation } from "react-i18next";
import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";
import ShowModelClickMoreInfo from "./ShowModelClickMoreInfo";



const Menu: React.FC = () => {


  // change language en or hw
  const { t } = useTranslation(["home"]);

  const titleAppChangeLanguage: any = t("titleApp", { returnObjects: true });

  const buttonMoreInfoChangeLanguage: any = t("ButtonMoreInfo", {
    returnObjects: true,
  });


  // show model more info
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className="title">

        <div className="mainBackground ">
          <AsyncImage
            src="https://i.postimg.cc/Jn8KjyT4/11.webp"
            style={{ width: "100%", height: "320px" }}
            loader={<div className="borderLoading"></div>}
            Transition={Blur}
            alt="main img heater"
          />
        </div>

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
        onHide={handleClose}
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
      >
        <ShowModelClickMoreInfo handleClose={() => handleClose()} />
      </Modal>
    </>
  );
};


export default Menu;