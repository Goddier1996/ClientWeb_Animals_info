import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";



const SelectImg: React.FC<{ eatOrNo: string }> = ({ eatOrNo }) => {


  const { t } = useTranslation(["home"]);

  let animalData = JSON.parse(sessionStorage.getItem("animal") as any);

  const i_dont_eat_thisChangeLanguage: any = t("i_dont_eat_this", {
    returnObjects: true,
  });
  const i_dont_eat_this: any = i_dont_eat_thisChangeLanguage.map(
    (node: any) => node.title
  );

    
    
  //choose image food check if eat this food,and lessen sound animal
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

    
    
  return (
    <>
      <img
        src={eatOrNo == "Eat" ? animalData.eatImage : animalData.notEatImage}
        alt="photo eat"
        onClick={() => {
          GetEatToAnimal(eatOrNo);
        }}
      ></img>
    </>
  );
};


export default SelectImg;