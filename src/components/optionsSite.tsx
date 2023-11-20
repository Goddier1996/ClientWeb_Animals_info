import { useState, useEffect } from "react";
import "../css/home.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import videoBg from "../images/animals-sound-kids-brave-2022-11-16-12-22-50_pFFaKSHG.mp4";
import AddAnimal from "./AddAnimal";
import SendMessage from "./sendMessageToAdmin";
import DeleteInfo from "./deleteAnimal";
import ChooseUpdatedAnimal from "./UpdatedInfoAnimal";
import { LoadUserAdmin } from "../Server/LoadDataApi";
import { useTranslation } from "react-i18next";



export const OptionsSite = () => {

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
  const optionsTitle: any = optionsAppInfoAboutOptionChangeLanguage.map(
    (node: any) => node.title
  );

  const optionsAppInfoAboutOptionUserCanSendMessageTitleChangeLanguage: any = t(
    "optionsAppInfoAboutOptionUserCanSendMessageTitle",
    {
      returnObjects: true,
    }
  );
  const optionsTitleIfUserNeedNewAnimal: any =
    optionsAppInfoAboutOptionUserCanSendMessageTitleChangeLanguage.map(
      (node: any) => node.title
    );

  
  
  const connectToAdminChangeLanguage: any = t("connectToAdmin", {
    returnObjects: true,
  });
  const optionsConnectToAdmin: any = connectToAdminChangeLanguage.map(
    (node: any) => node.title
  );


  const sendMessageChangeLanguage: any = t("sendMessage", {
    returnObjects: true,
  });
  const optionsSendMessage: any = sendMessageChangeLanguage.map(
    (node: any) => node.title
  );

  const okChangeLanguage: any = t("ok", {
    returnObjects: true,
  });
  const optionsOk: any = okChangeLanguage.map((node: any) => node.title);


  const LoginAdminChangeLanguage: any = t("LoginAdmin", {
    returnObjects: true,
  });
  const optionsLoginAdmin: any = LoginAdminChangeLanguage.map(
    (node: any) => node.title
  );


  const signInChangeLanguage: any = t("signIn", {
    returnObjects: true,
  });
  const optionsSignIn: any = signInChangeLanguage.map(
    (node: any) => node.title
  );


  const infoAdminChangeLanguage: any = t("infoAdmin", {
    returnObjects: true,
  });
  const optionsInfoAdmin: any = infoAdminChangeLanguage.map(
    (node: any) => node.title
  );



  //input data admin login
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  //pop up connect admin
  const [showConnectAdmin, setShowConnectAdmin] = useState(false);
  const handleCloseConnectAdmin = () => setShowConnectAdmin(false);
  const handleShowConnectAdmin = () => setShowConnectAdmin(true);

  //popup send meesage to admin
  const [showSendMessage, setShowSendMessage] = useState(false);
  const handleCloseSendMessage = () => setShowSendMessage(false);
  const handleShowSendMessage = () => setShowSendMessage(true);

  //popup chiose options add new animal , delete info animal , Updated info Animal
  const [showOptionsAdmin, setShowOptionsAdmin] = useState(false);
  const handleCloseOptionsAdmin = () => setShowOptionsAdmin(false);
  const handleShowOptionsAdmin = () => setShowOptionsAdmin(true);

  //popup add new animal
  const [showAddNewAnimal, setShowAddNewAnimal] = useState(false);
  const handleCloseAddNewAnimal = () => setShowAddNewAnimal(false);
  const handleShowAddNewAnimal = () => setShowAddNewAnimal(true);

  //popup delete info animal
  const [showDeleteAnimal, setShowDeleteAnimal] = useState(false);
  const handleCloseDeleteAnimal = () => setShowDeleteAnimal(false);
  const handleShowDeleteAnimal = () => setShowDeleteAnimal(true);

  //popup Updated info Animal
  const [showUpdatedAnimal, setShowUpdatedAnimal] = useState(false);
  const handleCloseUpdatedAnimal = () => setShowUpdatedAnimal(false);
  const handleShowUpdatedAnimal = () => setShowUpdatedAnimal(true);

  const [user, SetUser] = useState({});


  const LoadUser = async () => {
    SetUser(await LoadUserAdmin());
  };



  const ConnectToAdmin = async () => {
    sessionStorage.setItem("Admin", JSON.stringify(user));

    let userData = JSON.parse(sessionStorage.getItem("Admin") as any);

    for (let i = 0; i < userData.length; i++) {
      if (userData[i].Login == login && userData[i].Password == password) {
        //show popup
        handleShowOptionsAdmin();
      } else {
        Swal.fire({
          position: "top",
          icon: "error",
          text: "you need input all value or don`t have this user !",
          confirmButtonColor: "green",
        });
      }
    }
  };


  //pop up when you click + say if you went connect to admin show popup
  const clickToButtonAddPopUp = async () => {
    Swal.fire({
      position: "top",
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
  const chioseForAdmin = async (chiose: number) => {
    if (chiose == 1) {
      handleShowAddNewAnimal();
    }

    if (chiose == 2) {
      handleShowDeleteAnimal();
    }

    if (chiose == 3) {
      handleShowUpdatedAnimal();
    }
  };



  const AdminInfo = async () => {
    Swal.fire({
      html: `<div class="styleVideoAdmin"><video controls autoplay loop muted playsinline src=${videoBg}></video></div>`,
      confirmButtonText: "Wow",
      background: "rgba(0, 0, 0, 0.501)",
      confirmButtonColor: "#2d79b5",
    });
  };



  const hideModelSendMail = () => {
    setShowSendMessage(false);
  };



  const logOutAdminData = () => {
    sessionStorage.clear();
    handleCloseOptionsAdmin();
  };



  useEffect(() => {
    LoadUser();
  }, []);




  return (
    <>
      {optionsAppButtonChangeLanguage.map((node: any) => (
        <Button
          style={{ margin: "3%" }}
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
        >
          <p
            className="closes"
            onClick={handleCloseConnectAdmin}
            aria-label="Close"
          >
            &times;
          </p>

          <div className="titleHeater">
            <h1>
              {optionsLoginAdmin}{" "}
              <img
                src="https://img.icons8.com/color/48/000000/admin-settings-male.png"
                style={{ height: "40px" }}
              />
            </h1>
          </div>

          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Login"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
          </Modal.Body>

          <div className="infoAdminVideo">
            <a onClick={AdminInfo}>{optionsInfoAdmin}</a>
          </div>

          <br />

          <div className="ButtonInfo">
            <Button variant="success" onClick={ConnectToAdmin}>
              {optionsSignIn}
            </Button>
          </div>

          <br />
        </Modal>
      </div>

      
      {/* pop up send message to admin,if you wants to new info animal , from sendMessage.js compoment */}
      <div>
        <Modal
          show={showSendMessage}
          onHide={handleCloseSendMessage}
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Body>
            <Form>
              <SendMessage closeModelEmail={hideModelSendMail} />
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      
      {/* pop up chiose what admin do to add new animal or delete info animal or Updated info Animal */}
      <div>
        <Modal
          show={showOptionsAdmin}
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <p className="closes" onClick={logOutAdminData} aria-label="Close">
            &times;
          </p>

          <div className="titleHeater">
            <h1>
              Hello Admin , Choose one of the options{" "}
              <img
                src="https://i.postimg.cc/brk32DV6/Pngtree-anxious-confused-person-thinking-and-6707777.png"
                style={{ height: "200px" }}
              />
            </h1>
          </div>

          <Modal.Body>
            <Form>
              <div className="styleChioseOptionAdmin">
                <Button
                  onClick={() => {
                    chioseForAdmin(1);
                  }}
                  variant="primary"
                >
                  Add new Animal
                </Button>
                <Button
                  onClick={() => {
                    chioseForAdmin(3);
                  }}
                  variant="secondary"
                >
                  Updated Info Animal
                </Button>
                <Button
                  onClick={() => {
                    chioseForAdmin(2);
                  }}
                  variant="danger"
                >
                  Delete Info Animal
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      
      {/* pop up add new info animal from compoment addAnimal , from AddAnimal.js compoment */}
      <div>
        <Modal
          show={showAddNewAnimal}
          onHide={handleCloseAddNewAnimal}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <p
            className="closes"
            onClick={handleCloseAddNewAnimal}
            aria-label="Close"
          >
            &times;
          </p>

          <Modal.Body>
            <Form>
              <AddAnimal />
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      
      {/* pop up delete animal info , from deleteInfo.js compoment */}
      <div>
        <Modal
          show={showDeleteAnimal}
          onHide={handleCloseDeleteAnimal}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <p
            className="closes"
            onClick={handleCloseDeleteAnimal}
            aria-label="Close"
          >
            &times;
          </p>

          <Modal.Body>
            <Form>
              <DeleteInfo />
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      
      {/* pop up Choose Animal updated info , from ChooseUpdatedAnimal.js compoment*/}
      <div>
        <Modal
          show={showUpdatedAnimal}
          onHide={handleCloseUpdatedAnimal}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <p
            className="closes"
            onClick={handleCloseUpdatedAnimal}
            aria-label="Close"
          >
            &times;
          </p>

          <Modal.Body>
            <Form>
              <ChooseUpdatedAnimal />
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default OptionsSite;