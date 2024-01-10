import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import { AnimalIdInfo } from "../../../../../../interface/info.model";



const InputValue: React.FC<{
  hideModelFood: Function;
  dataAnimal: AnimalIdInfo;
  closeStartPopUpSelectTypeGiveEat: Function;
  closeInputEatPopUp: Function;
}> = ({
  hideModelFood,
  dataAnimal,
  closeStartPopUpSelectTypeGiveEat,
  closeInputEatPopUp,
}) => {


  const { t } = useTranslation(["home"]);

  const ToFeedTitleChangeLanguage: any = t("ToFeedTitle", {
    returnObjects: true,
  });
  const ToFeedTitle: String = ToFeedTitleChangeLanguage.map(
    (node: any) => node.title
  );

  const closeChangeLanguage: any = t("close", {
    returnObjects: true,
  });
  const closeTitle: String = closeChangeLanguage.map((node: any) => node.title);

  const need_input_what_animal_eatChangeLanguage: any = t(
    "need_input_what_animal_eat",
    {
      returnObjects: true,
    }
  );
  const need_input_what_animal_eat: String =
    need_input_what_animal_eatChangeLanguage.map((node: any) => node.title);

  const i_dont_eat_thisChangeLanguage: any = t("i_dont_eat_this", {
    returnObjects: true,
  });
  const i_dont_eat_this: String = i_dont_eat_thisChangeLanguage.map(
    (node: any) => node.title
  );

  const Yummy: any = t("Yummy", {
    returnObjects: true,
  });
  const YummyGoodEat: String = Yummy.map(
    (node: any) => node.title
  );

  const NoSound: any = t("NoSound", {
    returnObjects: true,
  });
  const NoSoundRefresh: String = NoSound.map(
    (node: any) => node.title
  );

  const Exit: any = t("Exit", {
    returnObjects: true,
  });
  const ExitAnimal: String = Exit.map(
    (node: any) => node.title
  );

  const TryAgain: any = t("TryAgain", {
    returnObjects: true,
  });
  const TryAgainAnimal: String = TryAgain.map(
    (node: any) => node.title
  );


  const [eat, setEat] = useState<string>("");


  //get animal and check input value,and lenten sound animal
  const GetEatToAnimal = () => {

    //if input was == value from nodeJs , we save in session storge before this easy use now for check
    if (dataAnimal.eat == eat.toLowerCase()) {
      
      //play sound animal
      let audio = new Audio(dataAnimal.sound);
      audio.play();

      Swal.fire({
        position: "center",
        allowOutsideClick: false,
        confirmButtonColor: "green",
        confirmButtonText: `${ExitAnimal}`,
        background: "none",
        html: `<div class="popUpGiveEat">
        <img class="soFull" src="https://c.tenor.com/3VMs08FbdTUAAAAC/garfield-fat.gif">
        <h1>${YummyGoodEat}</h1>   
        <audio id="player" src=${dataAnimal.sound}></audio>
          <div class="soundAnimalPlayAgain">
             <i onclick="document.getElementById('player').play()" class='fa fa-volume-up fa-2x'></i>
         </div>
         <p>${NoSoundRefresh}</p>
      </div>` ,
      }).then((result) => {
        if (result.isConfirmed) {
          closeStartPopUpSelectTypeGiveEat();
          closeInputEatPopUp();
          audio.pause();
        }
      });
    }

    //if dont input value
    else if (eat == "") {
      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        confirmButtonText: `${TryAgainAnimal}`,
        background: "none",
        html: `<div class="popUpGiveEatNotEat"><img class="soFullNotEat" src="https://i.postimg.cc/tJpmd8Ty/no-i-dont-like.gif"><br/><br/><p>${need_input_what_animal_eat}</p></div>`,
      });
    } else if (dataAnimal.eat != eat) {
      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        confirmButtonText: `${TryAgainAnimal}`,
        background: "none",
        html: `<div class="popUpGiveEatNotEat"><img class="soFullNotEat" src="https://i.postimg.cc/tJpmd8Ty/no-i-dont-like.gif"><br/><br/><p>${i_dont_eat_this}</p></div>`,
      });
    }
  };



  return (
    <>
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
        <Button
          variant="success"
          onClick={() => GetEatToAnimal()}
          style={{cursor: "url(https://cur.cursors-4u.net/games/gam-4/gam307.ani),url(https://cur.cursors-4u.net/games/gam-4/gam307.png), pointer"}}
        >
          {ToFeedTitle}
        </Button>

        <Button
          variant="danger"
          onClick={() => hideModelFood()}
          style={{cursor: "url(https://cur.cursors-4u.net/games/gam-4/gam307.ani),url(https://cur.cursors-4u.net/games/gam-4/gam307.png), pointer"}}
        >
          {closeTitle}
        </Button>
      </div>
    </>
  );
};


export default InputValue;