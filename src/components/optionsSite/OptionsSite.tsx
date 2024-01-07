import { useState } from "react";
import "../../css/home.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import SendMessage from "../sendEmail/SendMessageToAdmin";
import { useTranslation } from "react-i18next";
import LoginAdmin from "./connectAdmin/LoginAdmin";
import SelectOptionsAdmin from "./connectAdmin/SelectOptionsAdmin";
import OptionAddNewAnimal from "./connectAdmin/openPopUpOptionsAdmin/OptionAddNewAnimal";
import OptionDeleteAnimal from "./connectAdmin/openPopUpOptionsAdmin/OptionDeleteAnimal";
import OptionUpdatedAnimal from "./connectAdmin/openPopUpOptionsAdmin/OptionUpdatedAnimal";



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
  const chooseForAdmin = async (choose: number) => {
    
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
          style={{ margin: "3%",cursor: "url(https://cur.cursors-4u.net/games/gam-4/gam307.ani),url(https://cur.cursors-4u.net/games/gam-4/gam307.png), pointer" }}
          variant="primary"
          onClick={clickToButtonAddPopUp}
        >
          {node.title}
        </Button>
      ))}

      
      {/* pop up connect Admin */}
      <div>
        <Modal
          show={showConnectAdmin}
          onHide={handleCloseConnectAdmin}
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <LoginAdmin
            handleCloseConnectAdmin={() => handleCloseConnectAdmin}
            handleShowOptionsAdmin={handleShowOptionsAdmin}
          />
        </Modal>
      </div>

      
      {/* pop up send message */}
      <div>
        <Modal
          show={showSendMessage}
          onHide={handleCloseSendMessage}
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <Form>
              <SendMessage closeModelEmail={hideModelSendMail} />
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      
      {/* for now here options for admin  */}

      {/* pop up chiose what admin do to add new animal or delete info animal or Updated info Animal */}
      <div>
        <Modal
          show={showOptionsAdmin}
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <SelectOptionsAdmin
            logOutAdminData={() => logOutAdminData}
            chooseForAdmin={chooseForAdmin}
          />
        </Modal>
      </div>

      
      {/* pop up add new animal */}
      <div>
        <Modal
          show={showAddNewAnimal}
          onHide={handleCloseAddNewAnimal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <OptionAddNewAnimal
            handleCloseAddNewAnimal={() => handleCloseAddNewAnimal}
          />
        </Modal>
      </div>

      
      {/* pop up delete animal info */}
      <div>
        <Modal
          show={showDeleteAnimal}
          onHide={handleCloseDeleteAnimal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <OptionDeleteAnimal
            handleCloseDeleteAnimal={() => handleCloseDeleteAnimal}
          />
        </Modal>
      </div>

      
      {/* pop up Choose Animal updated info */}
      <div>
        <Modal
          show={showUpdatedAnimal}
          onHide={handleCloseUpdatedAnimal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <OptionUpdatedAnimal
            handleCloseUpdatedAnimal={() => handleCloseUpdatedAnimal}
          />
        </Modal>
      </div>
    </>
  );
};


export default OptionsSite;