import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import {AnimalIdInfo} from "../../../../../../interface/info.model"
import { AsyncImage } from 'loadable-image'
import { Blur } from 'transitions-kit'



const SelectImg: React.FC<{ eatOrNo: string,dataAnimal:AnimalIdInfo }> = ({ eatOrNo,dataAnimal }) => {


  const { t } = useTranslation(["home"]);


  const i_dont_eat_thisChangeLanguage: any = t("i_dont_eat_this", {
    returnObjects: true,
  });
  const i_dont_eat_this: String = i_dont_eat_thisChangeLanguage.map(
    (node: any) => node.title
  );

    
    
  //choose image food check if eat this food,and lessen sound animal
  const GetEatToAnimal = async (eat: string) => {
    
    if (eat == "Not Eat") {
      Swal.fire({
        allowOutsideClick: false,
        position: "center",
        confirmButtonColor: "green",
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
        background: "none",
        html: '<div class="popUpGiveEat"><img class="soFull" src="https://c.tenor.com/3VMs08FbdTUAAAAC/garfield-fat.gif"> </div>',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  };

    
    
  return (
    <div className="styleSelectImageRat">
      <AsyncImage
        src={eatOrNo == "Eat" ? dataAnimal.eatImage : dataAnimal.notEatImage}
        style={{ width: "125px", height: "90px",objectFit: "contain"}}
        Transition={Blur}
        alt="photo eat"
        onClick={() => {
          GetEatToAnimal(eatOrNo);
        }}
      />
    </div>
  );
};


export default SelectImg;