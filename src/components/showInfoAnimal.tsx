import React from "react";
import "../css/home.css";
import { Modal, Button } from "react-bootstrap";



//this compoment show info about animal,active this compoment in showAnimal.js
const InfoAnimal: React.FC<{ hideModelInfo: Function }> = ({ hideModelInfo }) => {


  let animalData = JSON.parse(sessionStorage.getItem("animal") as any);


  const hideModel = () => {
    
     hideModelInfo()
    // sessionStorage.clear();
    //  window.location.reload();
  }



  return (
    <div>

      <Modal.Body>
        <div className="titleHeaterInfo">
          <h1>Info Animal {animalData.name} :</h1>
        </div>

        <br />

        <div className="infoImage">
          <img src={animalData.image} alt="info animal"/>
        </div>

        <br />

        <div className="infoText">
          <p>{animalData.info}</p>
        </div>

        <div className="ButtonInfo">
          <Button variant="success" onClick={ hideModel}>
            Wow Good Info
          </Button>
        </div>
      </Modal.Body>
      
    </div>
  );
};


export default InfoAnimal;