import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";



const InputValue: React.FC<{ hideModelFood: Function,dataAnimal:any }> = ({
  hideModelFood,
  dataAnimal
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

    
  const [eat, setEat] = useState<string>("");


  
  //get animal and check input value,and lesten sound animal
  const GetEatToAnimal = async () => {

    //if input was == value from nodeJs , we save in session storge before this easy use now for check
    if (dataAnimal.eat == eat.toLowerCase()) {
      //play sound animal
      let audio = new Audio(dataAnimal.sound);
      audio.play();

      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        background: "none",
        html: '<div class="popUpGiveEat"><img class="soFull" src="https://c.tenor.com/3VMs08FbdTUAAAAC/garfield-fat.gif"> </div>',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }

    //if dont input value
    else if (eat == "") {
      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        background: "none",
        html: `<div class="popUpGiveEatNotEat"><img class="soFullNotEat" src="https://i.postimg.cc/tJpmd8Ty/no-i-dont-like.gif"><br/><br/><p>${need_input_what_animal_eat}</p></div>`,
      });
    } else if (dataAnimal.eat != eat) {
      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
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
        <Button variant="success" onClick={() => GetEatToAnimal()}>
          {ToFeedTitle}
        </Button>

        <Button variant="danger" onClick={() => hideModelFood()}>
          {closeTitle}
        </Button>
      </div>
    </>
  );
};


export default InputValue;