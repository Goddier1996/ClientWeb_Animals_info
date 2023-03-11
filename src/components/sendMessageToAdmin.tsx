import React, { useState } from "react";
import "../css/home.css";
import Swal from "sweetalert2";
import { send } from "emailjs-com";
import { Form, Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";


//this component user send message to gmail Admin , if user need new info animal , use this component in home.js
const SendMessage: React.FC<{ closeModelEmail: Function }> = ({ closeModelEmail, }) => {
  

  // change language en or hw
  const { t } = useTranslation(["home"]);

  const titleSendMessageChangeLanguage: any = t("titleSendMessage", {
    returnObjects: true,
  });

  const optionsTitleSendMessage: any = titleSendMessageChangeLanguage.map((node: any) => (node.title))

  const closeChangeLanguage: any = t("close", {
    returnObjects: true,
  });

  const optionsClose: any = closeChangeLanguage.map((node: any) => (node.title))

  const SendChangeLanguage: any = t("Send", {
    returnObjects: true,
  });

  const optionsSend: any = SendChangeLanguage.map((node: any) => (node.title))



  //value input to message
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });



  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };



  //send meesage to admin Gmail use EmailJS ,and check value
  const onSubmit = (e: any) => {

    if (
      toSend.from_name == "" ||
      toSend.reply_to == "" ||
      toSend.message == ""
    ) {
      e.preventDefault();

      Swal.fire({
        position: "top",
        confirmButtonColor: "green",
        icon: "error",
        title: "you can`t send message",
        text: "please input all value !",
      });
    }
    else {
      e.preventDefault();

      send("service_yn0kl3e", "template_gqgk97g", toSend, "sLQgUkQWpIKuhuhfD")
        .then((response) => {
          Swal.fire({
            position: "top",
            confirmButtonColor: "green",
            icon: "success",
            title: "has been sent successfully",
            text: "Wait for the webmaster`s response",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        })

        .catch((err) => {
          console.log("FAILED...", err);
        });
    }
  };



  return (
    <div>
      <div className="titleHeater">
        <h1>
          { optionsTitleSendMessage}{" "}
          <img src="https://img.icons8.com/doodle/48/000000/gmail-new.png" alt="send message to admin" />
        </h1>
      </div>

      <br />

      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={toSend.from_name}
            onChange={handleChange}
            autoFocus
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            name="reply_to"
            placeholder="Your Email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder="Your Message"
            value={toSend.message}
            onChange={handleChange}
          />
        </Form.Group>
      </Modal.Body>

      <div className="ButtonInfo">
        <Button variant="success" onClick={onSubmit}>
          {optionsSend}
        </Button>

        <Button variant="danger" onClick={() => closeModelEmail()}>
          {optionsClose}
        </Button>
      </div>
    </div>
  );
};

export default SendMessage;