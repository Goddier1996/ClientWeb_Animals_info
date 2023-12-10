import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";


//here component we add to animal food and check if this he eat,show popup,use in AddFoodAnimal components
const FotoEat: React.FC = () => {


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


  const choose_imageTitleChangeLanguage: any = t("choose_imageTitle", {
    returnObjects: true,
  });
  const choose_imageTitle: any = choose_imageTitleChangeLanguage.map(
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



  //chiose image food check if eat this food,and lesten sound animal
  const GetEatToAnimal = async (eat: string) => {

    if (eat == "Not Eat") {
      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        background: "none",
        html: `<div class="popUpGiveEatNotEat"><img class="soFullNotEat" src="https://i.postimg.cc/tJpmd8Ty/no-i-dont-like.gif"><br/><br/><p>${i_dont_eat_this}</p></div>`,
      });
    }


    if (eat == "Eat") {

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
            <img src="https://img.icons8.com/ios/50/000000/info--v1.png" />
          </Button>
        </OverlayTrigger>
      </div>

      <div className="titleHeaterInfo">
        {(currentLanguageCode == "hw") ?
          <p>{DontKnowWhatAnimalEatTitle} {animalData.name} {Click_to_InfoTitle}
          <br />
          <br />
          : {choose_imageTitle}
          </p>
          :
          <p>
          {DontKnowWhatAnimalEatTitle} {animalData.name} {Click_to_InfoTitle}.
          <br />
          <br />
          {choose_imageTitle} :
        </p>
      }
      </div>

      <br />

      <div className="chioseImage">
        <img
          src={animalData.eatImage}
          alt="photo eat"
          onClick={() => {
            GetEatToAnimal("Eat");
          }}
        ></img>

        <img
          src={animalData.notEatImage}
          onClick={() => {
            GetEatToAnimal("Not Eat");
          }}
        ></img>
      </div>

      <br />
      
    </div>
  );
};


export default FotoEat;