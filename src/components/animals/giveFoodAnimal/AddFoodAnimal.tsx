import { useEffect, useState } from "react";
import "../../../css/home.css";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import SelectTypeGiveEat from "./chooseTypeGiveFood/SelectTypeGiveEat";
import ModelTypeSelectGiveEat from "./chooseTypeGiveFood/ModelTypeSelectGiveEat";
import ShowTitleNameAnimal from "./chooseTypeGiveFood/ShowTitleNameAnimal";
import Loading from "../../tools/LoadingStyle/loadingItems/Loading";
import { ObjectCustomHookIdInfo } from "../../../interface/info.model";
import { FetchDataInfoId } from "../../../customHook/FetchDataInfoId";
import { ShowModelPopUp } from "../../../customHook/ShowModelPopUp";


const AddFoodAnimal: React.FC<{
  idAnimal: string;
  closeStartPopUpSelectTypeGiveEat: Function;
}> = ({ idAnimal, closeStartPopUpSelectTypeGiveEat }) => {


  // change language en or hw
  const { t } = useTranslation(["home"]);
  const currentLanguageCode = cookies.get("i18next") || "en";

  const optionsTitleChangeLanguage: any = t("optionsTitle", {
    returnObjects: true,
  });
  const optionsTitle: String = optionsTitleChangeLanguage.map(
    (node: any) => node.title
  );

  const optionsSelectTitleChangeLanguage: any = t("optionsSelectTitle", {
    returnObjects: true,
  });
  const optionsSelectTitle: String = optionsSelectTitleChangeLanguage.map(
    (node: any) => node.title
  );

  const closeChangeLanguage: any = t("close", {
    returnObjects: true,
  });
  const closeTitle: String = closeChangeLanguage.map((node: any) => node.title);


  //popup choose image eat
  const { show, handleShow, handleClose } = ShowModelPopUp();
  //popup choose input eat
  const { showOneMoreModel, handleShowOneMoreModel, handleCloseOneMoreModel } = ShowModelPopUp();


  const [saveOpjDataSendToCustomHook, SetSaveOpjDataSendToCustomHook] =
    useState<ObjectCustomHookIdInfo>({});

  // customHook
  const { data, loading } = FetchDataInfoId(saveOpjDataSendToCustomHook);


  const loadAnimalIdInfo = () => {

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
        <>
          <div className="titleHeater">
            <ShowTitleNameAnimal dataAnimalId={data} />
            <p>{optionsTitle}</p>
            <h6>{optionsSelectTitle}</h6>
          </div>

          {/* select type give eat animal img or input value */}
          <div className="chioseInputOrImage">
            <SelectTypeGiveEat
              imgSelect={"https://i.postimg.cc/SsP7gY7L/image.png"}
              handleShow={handleShow}
              typeSelect={"choose image"}
            />
            <SelectTypeGiveEat
              imgSelect={"https://i.postimg.cc/MpG0JYP0/pencil11.png"}
              handleShow={handleShowOneMoreModel}
              typeSelect={"input text food"}
            />
          </div>

          {/* pop up choose image eat , active here to show component FotoEat.js */}
          <ModelTypeSelectGiveEat
            show={show}
            onHide={handleClose}
            title={closeTitle}
            typeSelect={"imgSelect"}
            dataAnimalId={data}
            closeStartPopUpSelectTypeGiveEat={() =>
              closeStartPopUpSelectTypeGiveEat()
            }
          />

          {/* pop up choose input value eat , active here to show component InputEat.js */}
          <ModelTypeSelectGiveEat
            show={showOneMoreModel}
            onHide={handleCloseOneMoreModel}
            title={""}
            typeSelect={"inputValue"}
            dataAnimalId={data}
            closeStartPopUpSelectTypeGiveEat={() =>
              closeStartPopUpSelectTypeGiveEat()
            }
          />
        </>
      )}
    </div>
  );
};


export default AddFoodAnimal;