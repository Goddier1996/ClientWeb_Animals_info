import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { AnimalIdInfo } from "../../../../../../interface/info.model";
import { AsyncImage } from "loadable-image";
import { Fade } from "transitions-kit";
import LoadingCardsAnimals from "../../../../../tools/LoadingStyle/loadingItems/LoadingCardsAnimals";



const SelectImg: React.FC<{
  eatOrNo: string;
  dataAnimal: AnimalIdInfo;
  closeStartPopUpSelectTypeGiveEat: Function;
  closeImgEatPopUp: Function;
}> = ({
  eatOrNo,
  dataAnimal,
  closeStartPopUpSelectTypeGiveEat,
  closeImgEatPopUp,
}) => {


  const { t } = useTranslation(["home"]);

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


  
  //choose image food check if eat this food,and lessen sound animal
  const GetEatToAnimal = (eat: string) => {

    if (eat == "Not Eat") {
      Swal.fire({
        allowOutsideClick: false,
        position: "center",
        confirmButtonColor: "green",
        confirmButtonText: `${TryAgainAnimal}`,
        background: "none",
        html: `<div class="popUpGiveEatNotEat"><img class="soFullNotEat" src="https://i.postimg.cc/tJpmd8Ty/no-i-dont-like.gif"><br/><br/><p>${i_dont_eat_this}</p></div>`,
      });
    }

    if (eat == "Eat") {

      //play sound animal
      let audio = new Audio(dataAnimal.sound);
      audio.play();

      Swal.fire({
        allowOutsideClick: false,
        position: "center",
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
               </div>`,
      }).then((result) => {
        if (result.isConfirmed) {
          closeImgEatPopUp();
          closeStartPopUpSelectTypeGiveEat();
          audio.pause();
        }
      });
    }
  };



  return (
    <div className="styleSelectImageRat">
      <AsyncImage
        src={eatOrNo == "Eat" ? dataAnimal.eatImage : dataAnimal.notEatImage}
        style={{ width: "125px", height: "90px", objectFit: "contain" }}
        Transition={Fade}
        loader={<div><LoadingCardsAnimals/></div>}
        alt="photo eat"
        onClick={() => {
          GetEatToAnimal(eatOrNo);
        }}
      />
    </div>
  );
};


export default SelectImg;