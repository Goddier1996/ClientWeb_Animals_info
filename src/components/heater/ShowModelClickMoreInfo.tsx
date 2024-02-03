import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import OptionsSite from "../optionsSite/OptionsSite";
import ShowAsyncImage from "../tools/AsyncImages/ShowAsyncImage";



const ShowModelClickMoreInfo: React.FC<{ handleClose: Function }> = ({
  handleClose,
}) => {


  const { t } = useTranslation(["home"]);

  const currentLanguageCode = cookies.get("i18next") || "en";

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


  return (
    <>
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
          <ShowAsyncImage
            imgShow="https://i.postimg.cc/YSFWpGHh/mflx-zhpt.webp"
            widthImg={"250px"}
            heightImg={"120px"}
            altImage={"model info img animals"}
            typeAnimation={"Fade"}
            activeFunction={undefined}
          />
        </div>

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
              style={{
                margin: "3%",
                cursor:
                  "url(https://cur.cursors-4u.net/games/gam-4/gam307.ani),url(https://cur.cursors-4u.net/games/gam-4/gam307.png), pointer",
              }}
              variant="success"
              onClick={() => handleClose()}
            >
              {node.title}
            </Button>
          ))}

          {/* here show models option this app , send mail,connect admin */}
          <OptionsSite />
        </div>
      </Modal.Body>
    </>
  );
};


export default ShowModelClickMoreInfo;