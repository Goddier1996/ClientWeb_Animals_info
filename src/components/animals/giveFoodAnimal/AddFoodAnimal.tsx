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


  // show popUp
  //choose image eat
  const [showImageEat, setShowImageEat] = useState<boolean>(false);
  const handleCloseImageEat = () => setShowImageEat(false);
  const handleShowImageEat = () => setShowImageEat(true);

  //choose input eat
  const [showInputTextEat, setShowInputTextEat] = useState<boolean>(false);
  const handleCloseInputTextEat = () => setShowInputTextEat(false);
  const handleShowInputTextEat = () => setShowInputTextEat(true);


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
              handleShow={handleShowImageEat}
              typeSelect={"choose image"}
            />
            <SelectTypeGiveEat
              imgSelect={"https://i.postimg.cc/MpG0JYP0/pencil11.png"}
              handleShow={handleShowInputTextEat}
              typeSelect={"input text food"}
            />
          </div>

          {/* pop up choose image eat , active here to show component FotoEat.js */}
          <ModelTypeSelectGiveEat
            show={showImageEat}
            onHide={handleCloseImageEat}
            title={closeTitle}
            typeSelect={"imgSelect"}
            dataAnimalId={data}
            closeStartPopUpSelectTypeGiveEat={() =>
              closeStartPopUpSelectTypeGiveEat()
            }
          />

          {/* pop up choose input value eat , active here to show component InputEat.js */}
          <ModelTypeSelectGiveEat
            show={showInputTextEat}
            onHide={handleCloseInputTextEat}
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