import "./email.css";
import { useTranslation } from "react-i18next";
import InputValueSendEmail from "./InputValueSendEmail";



const SendMessage: React.FC<{ closeModelEmail: Function }> = ({
  closeModelEmail,
}) => {


  // change language en or hw
  const { t } = useTranslation(["home"]);

  const titleSendMessageChangeLanguage: any = t("titleSendMessage", {
    returnObjects: true,
  });

  const optionsTitleSendMessage: any = titleSendMessageChangeLanguage.map(
    (node: any) => node.title
  );


  return (
    <div>
      <div className="titleHeaterSendEmail">
        <h1>
          {optionsTitleSendMessage}{" "}
          <img
            src="https://img.icons8.com/doodle/48/000000/gmail-new.png"
            alt="send message to admin"
          />
        </h1>
      </div>

      <InputValueSendEmail closeModelEmail={closeModelEmail} />
    </div>
  );
};


export default SendMessage;