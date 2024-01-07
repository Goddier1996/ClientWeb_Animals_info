import { Form, Modal } from "react-bootstrap";
import LoginAdmin from "../connectAdmin/LoginAdmin";
import SendMessage from "../../sendEmail/SendMessageToAdmin";
import SelectOptionsAdmin from "../connectAdmin/SelectOptionsAdmin";
import OptionAddNewAnimal from "../connectAdmin/openPopUpOptionsAdmin/OptionAddNewAnimal";
import OptionDeleteAnimal from "../connectAdmin/openPopUpOptionsAdmin/OptionDeleteAnimal";
import OptionUpdatedAnimal from "../connectAdmin/openPopUpOptionsAdmin/OptionUpdatedAnimal";


const ModelOptions: React.FC<{
  show: boolean;
  handleClose: Function;
  handleShowOptions: Function;
  type: string;
  logOutAdminData: Function;
  chooseForAdmin: Function;
}> = ({
  show,
  handleClose,
  handleShowOptions,
  type,
  logOutAdminData,
  chooseForAdmin,
}) => {


  return (
    <Modal
      show={show}
      onHide={() => handleClose}
      style={{ background: "rgba(0, 0, 0, 0.3)" }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {type === "connectAdmin" ? (
          <LoginAdmin
            handleCloseConnectAdmin={() => handleClose}
            handleShowOptionsAdmin={handleShowOptions()}
          />
        ) : type == "sendEmail" ? (
          <Form>
            <SendMessage closeModelEmail={handleShowOptions()} />
          </Form>
        ) : type === "optionsAdmin" ? (
          <SelectOptionsAdmin
            logOutAdminData={() => logOutAdminData()}
            chooseForAdmin={chooseForAdmin}
          />
        ) : type == "addNewAnimal" ? (
          <OptionAddNewAnimal
            handleCloseAddNewAnimal={() => handleShowOptions()}
          />
        ) : type == "deleteAnimal" ? (
          <OptionDeleteAnimal
            handleCloseDeleteAnimal={() => handleShowOptions()}
          />
        ) : type == "updatedAnimal" ? (
          <OptionUpdatedAnimal
            handleCloseUpdatedAnimal={() => handleShowOptions()}
          />
        ) : (
          ""
        )}
      </Modal.Body>
    </Modal>
  );
};


export default ModelOptions;