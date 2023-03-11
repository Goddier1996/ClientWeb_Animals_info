import React , { useState } from "react";
import { Button, Form, Popover, OverlayTrigger } from "react-bootstrap";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";


//here component we add to animal food and check if this he eat,show popup,use in AddFoodAnimal components
const InputEat: React.FC<{ hideModelFood: Function }> = ({hideModelFood}) => {

  
  // change language en or hw
  const { t } = useTranslation(["home"]);
  const currentLanguageCode = cookies.get("i18next") || "en";

  const DontKnowWhatAnimalEatTitleChangeLanguage: any = t("DontKnowWhatAnimalEatTitle", {
    returnObjects: true,
  });
  const DontKnowWhatAnimalEatTitle: any = DontKnowWhatAnimalEatTitleChangeLanguage.map(
    (node: any) => node.title
  );


  const Click_to_InfoTitleChangeLanguage: any = t("Click_to_InfoTitle", {
    returnObjects: true,
  });
  const Click_to_InfoTitle: any = Click_to_InfoTitleChangeLanguage.map(
    (node: any) => node.title
  );


  const inputEatAnimalTitleChangeLanguage: any = t("inputEatAnimalTitle", {
    returnObjects: true,
  });
  const inputEatAnimalTitle: any = inputEatAnimalTitleChangeLanguage.map(
    (node: any) => node.title
  );


  const ToFeedTitleChangeLanguage: any = t("ToFeedTitle", {
    returnObjects: true,
  });
  const ToFeedTitle: any = ToFeedTitleChangeLanguage.map(
    (node: any) => node.title
  );


  const closeChangeLanguage: any = t("close", {
    returnObjects: true,
  });
  const closeTitle: any = closeChangeLanguage.map(
    (node: any) => node.title
  );


  const need_input_what_animal_eatChangeLanguage: any = t("need_input_what_animal_eat", {
    returnObjects: true,
  });
  const need_input_what_animal_eat: any = need_input_what_animal_eatChangeLanguage.map(
    (node: any) => node.title
  );


  const i_dont_eat_thisChangeLanguage: any = t("i_dont_eat_this", {
    returnObjects: true,
  });
  const i_dont_eat_this: any = i_dont_eat_thisChangeLanguage.map(
    (node: any) => node.title
  );



  //take data from seeison storage this animal,we add sessioson storage in showAnimals.js start fucn
  let animalData = JSON.parse(sessionStorage.getItem("animal") as any);

  const [eat, setEat] = useState<string>("");



  //get animal and check input value,and lesten sound animal
  const GetEatToAnimal = async () => {

    //if input was == value from nodeJs , we save in session storge before this easy use now for check
    if (animalData.eat == eat.toLowerCase()) {

      //play sound animal
      let audio = new Audio(animalData.sound);
      audio.play();

      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        background: "none",
        html: '<div class="popUpGiveEat"><img class="soFull" src="https://c.tenor.com/3VMs08FbdTUAAAAC/garfield-fat.gif"> </div>',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
          sessionStorage.clear();
        }
      });
    }


    //if dont input value
    else if (eat == "") {
      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        background: "none",
        html: `<div class="popUpGiveEatNotEat"><img class="soFullNotEat" src="https://i.postimg.cc/tJpmd8Ty/no-i-dont-like.gif"><br/><br/><p>${need_input_what_animal_eat}</p></div>`
      });
    }
    
      
      
    else if (animalData.eat != eat) {
      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        background: "none",
        html: `<div class="popUpGiveEatNotEat"><img class="soFullNotEat" src="https://i.postimg.cc/tJpmd8Ty/no-i-dont-like.gif"><br/><br/><p>${i_dont_eat_this}</p></div>`
      });
    }
  };



  //show info what animal eat - when click in pop up info
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{animalData.name} eat</Popover.Header>
      <Popover.Body>{animalData.eat}</Popover.Body>
    </Popover>
  );




  return (
    <div>

      <div className="titleHeaterHelp">
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="outline-light">
            <img src="https://img.icons8.com/ios/50/000000/info--v1.png" alt="give food"/>
          </Button>
        </OverlayTrigger>
      </div>

      <div className="titleHeaterInfo">
        {(currentLanguageCode == "hw") ?
          <p>{DontKnowWhatAnimalEatTitle} {animalData.name} {Click_to_InfoTitle}
          <br />
          <br />
          : {inputEatAnimalTitle}
          </p>
          :
          <p>
          {DontKnowWhatAnimalEatTitle} {animalData.name} {Click_to_InfoTitle}.
          <br />
          <br />
          {inputEatAnimalTitle} :
        </p>
      }
      </div>

      <br />

      <Form.Group
        className="mb-3 inputEat"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Control
          type="text"
          placeholder="Feed food suitable for the animal you have chosen"
          value={eat}
          onChange={(event) => setEat(event.target.value)}
          autoFocus
        />
      </Form.Group>

      <br />

      <div className="ButtonInfo">
        <Button variant="success" onClick={GetEatToAnimal}>
          {ToFeedTitle}
        </Button>
        
        <Button variant="danger" onClick={() => hideModelFood()}>
          {closeTitle}
        </Button>
      </div>
      
    </div>
  );
};


export default InputEat;