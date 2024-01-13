import "../../css/home.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import ModelOptions from "./showModals/ModelOptions";
import { ShowModelPopUp} from "../../customHook/ShowModelPopUp"


export const OptionsSite: React.FC = () => {


  // change Language
  const { t } = useTranslation(["home"]);

  const optionsAppButtonChangeLanguage: any = t("optionsAppButton", {
    returnObjects: true,
  });

  const optionsAppInfoAboutOptionChangeLanguage: any = t(
    "optionsAppInfoAboutOptionTitle",
    {
      returnObjects: true,
    }
  );
  const optionsTitle: String = optionsAppInfoAboutOptionChangeLanguage.map(
    (node: any) => node.title
  );

  const optionsAppInfoAboutOptionUserCanSendMessageTitleChangeLanguage: any = t(
    "optionsAppInfoAboutOptionUserCanSendMessageTitle",
    {
      returnObjects: true,
    }
  );
  const optionsTitleIfUserNeedNewAnimal: String =
    optionsAppInfoAboutOptionUserCanSendMessageTitleChangeLanguage.map(
      (node: any) => node.title
    );

  const connectToAdminChangeLanguage: any = t("connectToAdmin", {
    returnObjects: true,
  });
  const optionsConnectToAdmin: String = connectToAdminChangeLanguage.map(
    (node: any) => node.title
  );

  const sendMessageChangeLanguage: any = t("sendMessage", {
    returnObjects: true,
  });
  const optionsSendMessage: String = sendMessageChangeLanguage.map(
    (node: any) => node.title
  );

  const okChangeLanguage: any = t("ok", {
    returnObjects: true,
  });
  const optionsOk: String = okChangeLanguage.map((node: any) => node.title);


  // Open Close POP UP MODELS
  
  //pop up connect admin custom hook
  const { show, handleShow, handleClose } = ShowModelPopUp();
  //popup send message to admin custom hook
  const { showOneMoreModel, handleShowOneMoreModel, handleCloseOneMoreModel } = ShowModelPopUp();
  //popup choose options add new animal , delete info animal , Updated info Animal custom hook
  const { showThreeMoreModel, handleShowThreeMoreModel, handleCloseThreeMoreModel } = ShowModelPopUp();
  //popup add new animal custom hook
  const { showFourMoreModel, handleShowFourMoreModel, handleCloseFourMoreModel } = ShowModelPopUp();
  //popup delete info animal custom hook
  const { showFiveMoreModel, handleShowFiveMoreModel, handleCloseFiveMoreModel } = ShowModelPopUp();
  //popup Updated info Animal custom hook
  const { showSixMoreModel, handleShowSixMoreModel, handleCloseSixMoreModel } = ShowModelPopUp();



  //pop up when you click + say if you went connect to admin show popup
  const clickToButtonAddPopUp = async () => {
    Swal.fire({
      position: "center",
      confirmButtonColor: "grey",
      denyButtonColor: "#1099E1",
      cancelButtonColor: "green",
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: `${optionsSendMessage}`,
      cancelButtonText: `${optionsOk}`,
      confirmButtonText: `${optionsConnectToAdmin}`,
      icon: "question",
      html: `<p class="popUpTextP1">${optionsTitle}<br/><h6 class="popUpTextP2">${optionsTitleIfUserNeedNewAnimal}</h6></p>`,
    }).then((result) => {
      if (result.isConfirmed) {
        // show model pop up connect admin
        handleShow();
      } else if (result.isDenied) {
        // show model send mail
        handleShowOneMoreModel();
      }
    });
  };


  // here admin chiose add new animal or delete , we send a number when onclick to button , and check with number what we need active
  const chooseForAdmin = (choose: number) => {

    // add new animal
    if (choose == 1) {
      handleShowFourMoreModel();
    }

    // delete animal info
    if (choose == 2) {
      handleShowFiveMoreModel();
    }

    // Updated info Animal
    if (choose == 3) {
      handleShowSixMoreModel();
    }
  };


  const logOutAdminData = () => {
    sessionStorage.clear();
    handleCloseThreeMoreModel();
  };


  return (
    <>
      {optionsAppButtonChangeLanguage.map((node: any) => (
        <Button
          key={node.id}
          style={{
            margin: "3%",
            cursor:
              "url(https://cur.cursors-4u.net/games/gam-4/gam307.ani),url(https://cur.cursors-4u.net/games/gam-4/gam307.png), pointer",
          }}
          variant="primary"
          onClick={clickToButtonAddPopUp}
        >
          {node.title}
        </Button>
      ))}

      {/* pop up connect Admin */}
      <ModelOptions
        show={show}
        handleClose={() => handleClose()}
        handleShowOptions={() => handleShowThreeMoreModel}
        type={"connectAdmin"}
        logOutAdminData={() => null}
        chooseForAdmin={() => null}
      />

      {/* pop up send message */}
      <ModelOptions
        show={showOneMoreModel}
        handleClose={() => handleCloseOneMoreModel()}
        handleShowOptions={() => handleCloseOneMoreModel}
        type={"sendEmail"}
        logOutAdminData={() => null}
        chooseForAdmin={() => null}
      />

      
      {/* for now here OPTIONS for ADMIN  */}

      {/* pop up chiose what admin do to add new animal or delete info animal or Updated info Animal */}
      <ModelOptions
        show={showThreeMoreModel}
        handleClose={() => null}
        handleShowOptions={() => null}
        type={"optionsAdmin"}
        logOutAdminData={() => logOutAdminData}
        chooseForAdmin={chooseForAdmin}
      />

      {/* pop up add new animal */}
      <ModelOptions
        show={showFourMoreModel}
        handleClose={() => handleCloseFourMoreModel()}
        handleShowOptions={() => handleCloseFourMoreModel}
        type={"addNewAnimal"}
        logOutAdminData={() => null}
        chooseForAdmin={() => null}
      />

      {/* pop up delete animal info */}
      <ModelOptions
        show={showFiveMoreModel}
        handleClose={() => handleCloseFiveMoreModel()}
        handleShowOptions={() => handleCloseFiveMoreModel}
        type={"deleteAnimal"}
        logOutAdminData={() => null}
        chooseForAdmin={() => null}
      />

      {/* pop up Choose Animal updated info */}
      <ModelOptions
        show={showSixMoreModel}
        handleClose={() => handleCloseSixMoreModel()}
        handleShowOptions={() => handleCloseSixMoreModel}
        type={"updatedAnimal"}
        logOutAdminData={() => null}
        chooseForAdmin={() => null}
      />
    </>
  );
};


export default OptionsSite;