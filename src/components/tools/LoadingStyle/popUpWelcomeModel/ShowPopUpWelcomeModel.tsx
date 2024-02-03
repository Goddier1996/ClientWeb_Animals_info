import "./welcomePopUp.css";
import ShowAsyncImage from "../../AsyncImages/ShowAsyncImage";


const ShowPopUpWelcomeModel: React.FC = () => {

  return (
    <div className="popUpHome">
      <ShowAsyncImage
        imgShow="https://i.postimg.cc/Fs3XsmRW/popup.webp"
        widthImg={"280px"}
        heightImg={"180px"}
        altImage={"pop up loading home page"}
        typeAnimation={"Zoom"}
        activeFunction={undefined}
      />
    </div>
  );
};


export default ShowPopUpWelcomeModel;