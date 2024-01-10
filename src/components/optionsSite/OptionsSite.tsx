import { useState } from "react";
import "../../css/home.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import ModelOptions from "./showModals/ModelOptions";



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



  //pop up connect admin
  const [showConnectAdmin, setShowConnectAdmin] = useState<boolean>(false);
  const handleCloseConnectAdmin = () => setShowConnectAdmin(false);
  const handleShowConnectAdmin = () => setShowConnectAdmin(true);

  //popup send message to admin
  const [showSendMessage, setShowSendMessage] = useState<boolean>(false);
  const handleCloseSendMessage = () => setShowSendMessage(false);
  const handleShowSendMessage = () => setShowSendMessage(true);

  //popup choose options add new animal , delete info animal , Updated info Animal
  const [showOptionsAdmin, setShowOptionsAdmin] = useState<boolean>(false);
  const handleCloseOptionsAdmin = () => setShowOptionsAdmin(false);
  const handleShowOptionsAdmin = () => setShowOptionsAdmin(true);

  //popup add new animal
  const [showAddNewAnimal, setShowAddNewAnimal] = useState<boolean>(false);
  const handleCloseAddNewAnimal = () => setShowAddNewAnimal(false);
  const handleShowAddNewAnimal = () => setShowAddNewAnimal(true);

  //popup delete info animal
  const [showDeleteAnimal, setShowDeleteAnimal] = useState<boolean>(false);
  const handleCloseDeleteAnimal = () => setShowDeleteAnimal(false);
  const handleShowDeleteAnimal = () => setShowDeleteAnimal(true);

  //popup Updated info Animal
  const [showUpdatedAnimal, setShowUpdatedAnimal] = useState<boolean>(false);
  const handleCloseUpdatedAnimal = () => setShowUpdatedAnimal(false);
  const handleShowUpdatedAnimal = () => setShowUpdatedAnimal(true);



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
        handleShowConnectAdmin();
      } else if (result.isDenied) {
        handleShowSendMessage();
      }
    });
  };



  // here admin chiose add new animal or delete , we send a number when onclick to button , and check with number what we need active
  const chooseForAdmin = (choose: number) => {
    if (choose == 1) {
      handleShowAddNewAnimal();
    }

    if (choose == 2) {
      handleShowDeleteAnimal();
    }

    if (choose == 3) {
      handleShowUpdatedAnimal();
    }
  };


  const hideModelSendMail = () => {
    setShowSendMessage(false);
  };


  const logOutAdminData = () => {
    sessionStorage.clear();
    handleCloseOptionsAdmin();
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
        show={showConnectAdmin}
        handleClose={() => handleCloseConnectAdmin()}
        handleShowOptions={() => handleShowOptionsAdmin}
        type={"connectAdmin"}
        logOutAdminData={() => null}
        chooseForAdmin={() => null}
      />

      {/* pop up send message */}
      <ModelOptions
        show={showSendMessage}
        handleClose={() => handleCloseSendMessage()}
        handleShowOptions={() => hideModelSendMail}
        type={"sendEmail"}
        logOutAdminData={() => null}
        chooseForAdmin={() => null}
      />

      
      {/* for now here OPTIONS for ADMIN  */}

      {/* pop up chiose what admin do to add new animal or delete info animal or Updated info Animal */}
      <ModelOptions
        show={showOptionsAdmin}
        handleClose={() => null}
        handleShowOptions={() => null}
        type={"optionsAdmin"}
        logOutAdminData={() => logOutAdminData}
        chooseForAdmin={chooseForAdmin}
      />

      {/* pop up add new animal */}
      <ModelOptions
        show={showAddNewAnimal}
        handleClose={() => handleCloseAddNewAnimal()}
        handleShowOptions={() => handleCloseAddNewAnimal}
        type={"addNewAnimal"}
        logOutAdminData={() => null}
        chooseForAdmin={() => null}
      />

      {/* pop up delete animal info */}
      <ModelOptions
        show={showDeleteAnimal}
        handleClose={() => handleCloseDeleteAnimal()}
        handleShowOptions={() => handleCloseDeleteAnimal}
        type={"deleteAnimal"}
        logOutAdminData={() => null}
        chooseForAdmin={() => null}
      />

      {/* pop up Choose Animal updated info */}
      <ModelOptions
        show={showUpdatedAnimal}
        handleClose={() => handleCloseUpdatedAnimal()}
        handleShowOptions={() => handleCloseUpdatedAnimal}
        type={"updatedAnimal"}
        logOutAdminData={() => null}
        chooseForAdmin={() => null}
      />
    </>
  );
};


export default OptionsSite;