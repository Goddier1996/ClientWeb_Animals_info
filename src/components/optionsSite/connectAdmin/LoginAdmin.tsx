import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { connectAdmin } from "../../../Server/AddDataOrUpdatedApi";
import { useTranslation } from "react-i18next";
import { ConnectAdminLogin } from "../../../interface/info.model";



const LoginAdmin: React.FC<{
  handleCloseConnectAdmin: Function;
  handleShowOptionsAdmin: Function;
}> = ({ handleCloseConnectAdmin, handleShowOptionsAdmin }) => {


  // change Language
  const { t } = useTranslation(["home"]);

  const LoginAdminChangeLanguage: any = t("LoginAdmin", {
    returnObjects: true,
  });
  const optionsLoginAdmin: String = LoginAdminChangeLanguage.map(
    (node: any) => node.title
  );

  const signInChangeLanguage: any = t("signIn", {
    returnObjects: true,
  });
  const optionsSignIn: String = signInChangeLanguage.map(
    (node: any) => node.title
  );

  const infoAdminChangeLanguage: any = t("infoAdmin", {
    returnObjects: true,
  });
  const optionsInfoAdmin: String = infoAdminChangeLanguage.map(
    (node: any) => node.title
  );

  //input data admin login
  const [Login, setLogin] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);



  const ConnectToAdmin = async () => {
    setLoading(true);
    let userValue: ConnectAdminLogin = {
      Login: Login,
      Password: Password,
    };

    await connectAdmin(userValue);

    let userData = JSON.parse(sessionStorage.getItem("adminInfo") as any);

    if (userData != null) {
      handleShowOptionsAdmin();
      setLoading(false);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        text: "you need input all value or don`t have this user !",
        confirmButtonColor: "green",
        allowOutsideClick: false,
        toast: true,
      });
      setLoading(false);
    }
  };


  // here show video for user's what admin can do to
  const AdminInfo = async () => {
    Swal.fire({
      html: `<div class="styleVideoAdmin"><video controls autoplay loop muted playsinline 
          src="https://github.com/Goddier1996/ClientWeb_Animals_info/assets/59862302/370e88fe-b545-4a66-a7cc-f15ff6ab8be8"</video></div>`,
      confirmButtonText: "Wow",
      background: "rgba(0, 0, 0, 0.501)",
      confirmButtonColor: "#2d79b5",
    });
  };



  return (
    <>
      <p
        className="closes"
        onClick={handleCloseConnectAdmin()}
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

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          placeholder="Login"
          value={Login}
          onChange={(event) => setLogin(event.target.value)}
          autoFocus
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="password"
          placeholder="Password"
          value={Password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>

      <div className="infoAdminVideo">
        <a onClick={AdminInfo}>{optionsInfoAdmin}</a>
      </div>

      <div className="ButtonInfo">
        <Button
          disabled={loading}
          variant="success"
          onClick={ConnectToAdmin}
          style={{ marginTop: "3%" }}
        >
          {!loading ? optionsSignIn : <>loading...</>}
        </Button>
      </div>
    </>
  );
};


export default LoginAdmin;