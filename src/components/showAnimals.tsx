import React, { useState, useEffect } from "react";
import "../css/home.css";
import { Form, Modal } from "react-bootstrap";
import AddFoodAnimal from "./addFoodAnimal";
import InfoAnimal from "./showInfoAnimal";
import {
  LoadAllCardsAnimals,
  LoadAllCardsAnimalsHebrewLanguage,
} from "../Server/LoadDataApi";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";



//this in card ui style and load from node js data a animals name and sound commpoment active home.js for show
const AnimalsModals: React.FC<{ query: string }> = ({ query }) => {


  // change language en or hw
  const { t } = useTranslation(["home"]);
  const currentLanguageCode = cookies.get("i18next") || "en";

  const Welcome_To_Safari_popUpChangeLanguage: any = t(
    "Welcome_To_Safari_popUp",
    {
      returnObjects: true,
    }
  );
  const Welcome_To_Safari_popUp: any = Welcome_To_Safari_popUpChangeLanguage.map(
    (node: any) => node.title
  );


  const animalDontFoundInDataBaseTitleChangeLanguage: any = t(
    "animalDontFoundInDataBaseTitle",
    {
      returnObjects: true,
    }
  );
  const animalDontFoundInDataBaseTitle: any = animalDontFoundInDataBaseTitleChangeLanguage.map(
    (node: any) => node.title
  );


  const animalDontFoundInDataBaseTitleSendToAdminMessageChangeLanguage: any = t(
    "animalDontFoundInDataBaseTitleSendToAdminMessage",
    {
      returnObjects: true,
    }
  );
  const animalDontFoundInDataBaseTitleSendToAdminMessage: any = animalDontFoundInDataBaseTitleSendToAdminMessageChangeLanguage.map(
    (node: any) => node.title
  );


  //popup open or close , sound animal show popUp
  const [showGetFoodAnimal, setShowGetFoodAnimal] = useState(false);
  const handleCloseGetFoodAnimal = () => setShowGetFoodAnimal(false);
  const handleShowGetFoodAnimal = () => setShowGetFoodAnimal(true);


  //popup open or close , show info about animal
  const [showShowInfoAnimal, setShowShowInfoAnimal] = useState(false);
  // const handleCloseShowInfoAnimal = () => setShowShowInfoAnimal(false);
  const handleShowShowInfoAnimal = () => setShowShowInfoAnimal(true);

  //save for show all models animals from nodejs json file
  const [notesEnglishLanguage, SetNotesEnglishLanguage] = useState([] as any[]);
  const [notesHebrewLanguage, SetNotesHebrewLanguage] = useState([] as any[]);


  const [
    checkIfHaveValueWhenSearchEnglishLanguage,
    SetCheckIfHaveValueWhenSearchEnglishLanguage,
  ] = useState([] as any[]);
  const [
    checkIfHaveValueWhenSearchHebrewLanguage,
    SetCheckIfHaveValueWhenSearchHebrewLanguage,
  ] = useState([] as any[]);


  const [loading, setLoading] = useState(false);



  //load all card animals from api
  const LoadAllNotes = async () => {
    try {
      setLoading(true);

      SetNotesEnglishLanguage(await LoadAllCardsAnimals());
      SetNotesHebrewLanguage(await LoadAllCardsAnimalsHebrewLanguage());

      setLoading(false); // Stop loading
    } catch (error) {
      setLoading(false); // Stop loading in case of error
      console.error(error);
    }
  };



  //here we save data animal from nodeJs database to seesion storge,and show popup where we input value what animal eat
  const start = async (
    sound: string,
    name: string,
    eat: string,
    notEatImage: string,
    eatImage: string
  ) => {
    let animal = {
      name: name,
      eat: eat,
      sound: sound,
      eatImage: eatImage,
      notEatImage: notEatImage,
    };

    sessionStorage.setItem("animal", JSON.stringify(animal));

    //show popup
    handleShowGetFoodAnimal();
  };



  //here we save data animal from nodeJs json file to seesion storge,and show popup about Animal show info
  const clickToImageForInfo = async (
    info: string,
    imageInfo: string,
    name: string
  ) => {
    let animal = {
      name: name,
      info: info,
      image: imageInfo,
    };

    sessionStorage.setItem("animal", JSON.stringify(animal));

    handleShowShowInfoAnimal();
  };



  // send this function to component showInfoAnimal to close model
  const hideModelInfoAnimal = () => {
    setShowShowInfoAnimal(false);
  };



  useEffect(() => {
    LoadAllNotes();
  }, []);



  useEffect(() => {

    SetCheckIfHaveValueWhenSearchEnglishLanguage(
      notesEnglishLanguage.filter((item: any) => {
        return item.title.toLowerCase().startsWith(query);
      })
    );

    SetCheckIfHaveValueWhenSearchHebrewLanguage(
      notesHebrewLanguage.filter((item: any) => {
        return item.title.toLowerCase().startsWith(query);
      })
    );
  });



  return (
    <div>
      {loading ? (
        <div className="popUpHome">
          <h1>{Welcome_To_Safari_popUp}</h1>
          <img
            src="https://i.pinimg.com/originals/ac/46/7c/ac467cbb2eb0fde593996c175cec0176.gif"
            alt="popupWelcome"
          />
        </div>
      ) : (
        <div className="cards-list">
          {currentLanguageCode == "en"
            ? checkIfHaveValueWhenSearchEnglishLanguage.map((node) => (
                <div key={node._id} className="cardx">
                  <div className="card_image">
                    <img
                      src={node.image}
                      alt="image animal"
                      onClick={() =>
                        clickToImageForInfo(
                          node.infoAnimal,
                          node.infoImage,
                          node.title
                        )
                      }
                    />
                  </div>

                  <div className="card_title title-white">
                    <h6>{node.title}</h6>
                    <p
                      onClick={() =>
                        start(
                          node.sound,
                          node.title,
                          node.eat,
                          node.notEatImage,
                          node.eatImage
                        )
                      }
                    >
                      <img
                        src={require("../images/bowel1.png")}
                        alt="give eat"
                      ></img>
                    </p>
                  </div>
                </div>
              ))
            : checkIfHaveValueWhenSearchHebrewLanguage.map((node) => (
                <div key={node._id} className="cardx">
                  <div className="card_image">
                    <img
                      src={node.image}
                      alt="image animal"
                      onClick={() =>
                        clickToImageForInfo(
                          node.infoAnimal,
                          node.infoImage,
                          node.title
                        )
                      }
                    />
                  </div>

                  <div className="card_title title-white">
                    <h6> {node.title}</h6>
                    <p
                      onClick={() =>
                        start(
                          node.sound,
                          node.title,
                          node.eat,
                          node.notEatImage,
                          node.eatImage
                        )
                      }
                    >
                      <img
                        src={require("../images/bowel1.png")}
                        alt="give eat"
                      ></img>
                    </p>
                  </div>
                </div>
              ))}

          {checkIfHaveValueWhenSearchEnglishLanguage.length === 0 &&
          checkIfHaveValueWhenSearchHebrewLanguage.length === 0 ? (
            <div className="dontHaveThisValueInArray">
              <img
                src="https://media.tenor.com/IbZePZ2opZkAAAAi/rascal-nothing-to-see-here.gif"
                alt="dont have this animal"
              />
              <br />
                  <p>{ animalDontFoundInDataBaseTitle }</p>
                  <p>{ animalDontFoundInDataBaseTitleSendToAdminMessage }</p>
            </div>
          ) : (
            ""
          )}
        </div>
      )}

      
      {/* get a food animal */}
      <div>
        <Modal
          show={showGetFoodAnimal}
          aria-labelledby="contained-modal-title-vcenter"
          onHide={handleCloseGetFoodAnimal}
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
        >
          <p
            className="closes"
            onClick={handleCloseGetFoodAnimal}
            aria-label="Close"
          >
            &times;
          </p>

          <Modal.Body>
            <Form>
              {/* show pop up add eat animal for sound - all this in compoments addFoodAnimals,js */}
              <AddFoodAnimal />
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      
      {/* show animal info model */}
      <div>
        <Modal
          show={showShowInfoAnimal}
          aria-labelledby="contained-modal-title-vcenter"
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
        >
          <Modal.Body>
            <Form>
              {/* show pop up info about animal - use showInfoAnimal.js */}
              <InfoAnimal hideModelInfo={hideModelInfoAnimal} />
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default AnimalsModals;