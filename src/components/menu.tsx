import React , { useState } from "react";
import "../css/home.css";
import { Button, Modal } from "react-bootstrap";
import OptionsSite from "./optionsSite";


const Menu: React.FC = () => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div className="title">
      <div className="titleWeb">
        <p>Information about all types of animals for children</p>
      </div>

      <div className="help">
        <Button size="sm" variant="warning" onClick={handleShow}>
          More Info
        </Button>

        <Modal
          show={show}
          aria-labelledby="contained-modal-title-vcenter"
          onHide={handleClose}
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        >
          <Modal.Body>
            <div className="titleInfoHowUseWebSite">
              <p>Welcome to Safari</p>
            </div>

            <div className="titleInfoHowLearn">
              <p>Here you can learn about animals.</p>
            </div>

            <div className="imgInfo">
              <img src="https://i.postimg.cc/XqhBtVNY/mflx-zhpt-220613.jpg"></img>
            </div>

            <br />
            <br />

            <div className="titleInfoHowLearnStart">
              <p>
                * To read about the selected animal , click on the picture of that animal.
                <br />
                <br />
                * The user can feed the animal as per his choice , After the animal eats you will hear its voice.
                <br />
                <br />
                * If a user does not know what the animal eats , there is an option to click on information.
                <br />
                <br />
                * User can send message to Admin , if have a problem or add new animal. 
                <br />
                <br/>
                * Only Admin can add new info about Animal.
              </p>
            </div>

            {/* choose options start or move to model component OptionsSite show all options site */}
            <div style={{textAlign:"center"}}>
              <Button style={{margin:"3%"}} variant="success" onClick={handleClose}>
                Let`s start
              </Button>

              <OptionsSite />
            </div>

          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};


export default Menu;