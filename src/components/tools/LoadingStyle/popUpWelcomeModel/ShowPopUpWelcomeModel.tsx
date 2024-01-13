import { AsyncImage } from "loadable-image";
import { Zoom } from "transitions-kit";
import LoadingCardsAnimals from "../loadingItems/LoadingCardsAnimals";
import "./welcomePopUp.css"


const ShowPopUpWelcomeModel: React.FC = () => {
  return (
    <div className="popUpHome">
      <AsyncImage
          src="https://i.postimg.cc/Fs3XsmRW/popup.webp"
          style={{ width: "280px", height: "180px" , borderRadius:"40px" }}
          loader={<LoadingCardsAnimals/>}
          Transition={Zoom}
          alt="img Info"
        />
      </div>
  );
};


export default ShowPopUpWelcomeModel;