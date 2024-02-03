import "../../../../../css/home.css";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { useEffect, useState } from "react";
import Loading from "../../../../tools/LoadingStyle/loadingItems/Loading";
import { ObjectCustomHookIdInfo } from "../../../../../interface/info.model";
import { FetchDataInfoId } from "../../../../../customHook/FetchDataInfoId";
import ShowAsyncImage from "../../../../tools/AsyncImages/ShowAsyncImage";



const InfoAnimal: React.FC<{ hideModelInfo: Function; idAnimal: string }> = ({
  hideModelInfo,
  idAnimal,
}) => {


  // change language en or hw
  const { t } = useTranslation(["home"]);
  const currentLanguageCode = cookies.get("i18next") || "en";

  const InfoAnimalTitleChangeLanguage: any = t("InfoAnimal", {
    returnObjects: true,
  });
  const InfoAnimalTitle: String = InfoAnimalTitleChangeLanguage.map(
    (node: any) => node.title
  );

  const GoodInfoButtonChangeLanguage: any = t("GoodInfoButton", {
    returnObjects: true,
  });
  const GoodInfoButton: String = GoodInfoButtonChangeLanguage.map(
    (node: any) => node.title
  );


  const [saveOpjDataSendToCustomHook, SetSaveOpjDataSendToCustomHook] =
    useState<ObjectCustomHookIdInfo>({});
  // customHook
  const { data, loading } = FetchDataInfoId(saveOpjDataSendToCustomHook);


  const loadAnimalIdInfo = async () => {
    if (currentLanguageCode == "en") {
      SetSaveOpjDataSendToCustomHook({
        typeHowUse: "englishLanguage",
        id: idAnimal,
      });
    } else if (currentLanguageCode == "hw") {
      SetSaveOpjDataSendToCustomHook({
        typeHowUse: "hebrewLanguage",
        id: idAnimal,
      });
    }
  };


  useEffect(() => {
    loadAnimalIdInfo();
  }, [idAnimal]);


  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Modal.Body>
          <div className="titleHeaterInfo">
            <h1>
              :{InfoAnimalTitle} {data.title}
            </h1>
          </div>

          <div className="infoImage">
            <ShowAsyncImage
              imgShow={data.infoImage}
              widthImg={"100%"}
              heightImg={"230px"}
              altImage={"info animal"}
              typeAnimation={"Fade"}
              activeFunction={undefined}
            />
          </div>

          <div
            className="infoText"
            style={
              currentLanguageCode == "hw"
                ? { textAlign: "right" }
                : { textAlign: "left" }
            }
          >
            <p>{data.infoAnimal}</p>
          </div>

          <div className="ButtonInfo">
            <Button
              variant="success"
              onClick={() => hideModelInfo()}
              style={{
                cursor:
                  "url(https://cur.cursors-4u.net/games/gam-4/gam307.ani),url(https://cur.cursors-4u.net/games/gam-4/gam307.png), pointer",
              }}
            >
              {GoodInfoButton}
            </Button>
          </div>
        </Modal.Body>
      )}
    </div>
  );
};


export default InfoAnimal;