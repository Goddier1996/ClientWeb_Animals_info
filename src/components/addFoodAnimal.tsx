import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../css/home.css";
import ImageEat from "./FotoEat";
import InputEat from "./giveFoodAnimal";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";


//here component we add to animal food and check if this he eat,show popup,use in showAnimals compoments
const AddFoodAnimal: React.FC = () => {


  // change language en or hw
  const { t } = useTranslation(["home"]);
  const currentLanguageCode = cookies.get("i18next") || "en";

  const Hi_I_AmTitleChangeLanguage: any = t("Hi_I_AmTitle", {
    returnObjects: true,
  });
  const InfoAnimalTitle: any = Hi_I_AmTitleChangeLanguage.map(
    (node: any) => node.title
  );

  
  const i_am_hungryTitleChangeLanguage: any = t("i_am_hungryTitle", {
    returnObjects: true,
  });
  const i_am_hungryTitle: any = i_am_hungryTitleChangeLanguage.map(
    (node: any) => node.title
  );


  const Give_me_foodTitleChangeLanguage: any = t("Give_me_foodTitle", {
    returnObjects: true,
  });
  const Give_me_foodTitle: any = Give_me_foodTitleChangeLanguage.map(
    (node: any) => node.title
  );


  const optionsTitleChangeLanguage: any = t("optionsTitle", {
    returnObjects: true,
  });
  const optionsTitle: any = optionsTitleChangeLanguage.map(
    (node: any) => node.title
  );


  const optionsSelectTitleChangeLanguage: any = t("optionsSelectTitle", {
    returnObjects: true,
  });
  const optionsSelectTitle: any = optionsSelectTitleChangeLanguage.map(
    (node: any) => node.title
  );


  const closeChangeLanguage: any = t("close", {
    returnObjects: true,
  });
  const closeTitle: any = closeChangeLanguage.map(
    (node: any) => node.title
  );



  //take data from seeison storage this animal,we add sessioson storage in showAnimals.js start fucn
  let animalData = JSON.parse(sessionStorage.getItem("animal") as any);


  // show popUp
  //chiose image eat
  const [showImageEat, setShowImageEat] = useState(false);
  const handleCloseImageEat = () => setShowImageEat(false);
  const handleShowImageEat = () => setShowImageEat(true);

  //chiose input eat
  const [showInputTextEat, setShowInputTextEat] = useState(false);
  const handleCloseInputTextEat = () => setShowInputTextEat(false);
  const handleShowInputTextEat = () => setShowInputTextEat(true);


  // send this function to component showInfoAnimal to close model
  const hideModelInputTextFood = () => {
    setShowInputTextEat(false);
  };



  return (
    <div>
      <div className="titleHeater">
        {currentLanguageCode == "hw" ? (
          <h1>
            {InfoAnimalTitle} {animalData.name} {Give_me_foodTitle} {" "}
            <img
              src="https://i.postimg.cc/6qx8029p/vecteezy-pets-bowl-food.jpg"
              alt="image animal"
            />{" "} {i_am_hungryTitle}{" "}
          </h1>
        ) : (
          <h1>
            {InfoAnimalTitle} {animalData.name} , {i_am_hungryTitle}{" "}
            <img
              src="https://i.postimg.cc/6qx8029p/vecteezy-pets-bowl-food.jpg"
              alt="image animal"
            />{" "}
            {Give_me_foodTitle}.
          </h1>
        )}

        <p>
          {optionsTitle}
          <br />
        </p>
        <h6>
          {optionsSelectTitle}
          <br />
        </h6>
      </div>

      <div className="chioseInputOrImage">
        <img
          src="https://i.postimg.cc/SsP7gY7L/image.png"
          alt="choose image"
          onClick={handleShowImageEat}
        ></img>

        <img
          src="https://i.postimg.cc/MpG0JYP0/pencil11.png"
          alt="input text food"
          onClick={handleShowInputTextEat}
        ></img>
      </div>

      
      {/* pop up chiose image eat , active here to show compoment FotoEat.js */}
      <div>
        <Modal
          show={showImageEat}
          onHide={handleCloseImageEat}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Body>
            <Form>
              {/* active compoment FotoEat */}
              <ImageEat />
            </Form>

            <div className="buttonExit">
              <Button variant="danger" onClick={handleCloseImageEat}>
                {closeTitle}
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      
      {/* pop up chiose input eat , active here to show compoment InputEat.js */}
      <div>
        <Modal
          show={showInputTextEat}
          onHide={handleCloseInputTextEat}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Body>
            <Form>
              {/* active compoment InputEat.js */}
              <InputEat hideModelFood={hideModelInputTextFood} />
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default AddFoodAnimal;