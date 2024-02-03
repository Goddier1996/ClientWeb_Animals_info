import { AsyncImage } from "loadable-image";
import { Blur, Fade, Zoom } from "transitions-kit";
import LoadingCardsAnimals from "../LoadingStyle/loadingItems/LoadingCardsAnimals";


const ShowAsyncImage: React.FC<{
  imgShow: string;
  altImage: string;
  typeAnimation: string;
  activeFunction: Function | undefined;
  widthImg: string;
  heightImg: string;
}> = ({
  imgShow,
  altImage,
  typeAnimation,
  activeFunction,
  widthImg,
  heightImg,
}) => {


  return (
    <>
      <AsyncImage
        src={imgShow}
        style={{
          width: widthImg,
          height: heightImg,
          objectFit: altImage == "photo eat" ? "contain" : "cover",
        }}
        Transition={
          typeAnimation == "Blur"
            ? Blur
            : typeAnimation == "Fade"
            ? Fade
            : typeAnimation == "Zoom"
            ? Zoom
            : Blur
        }
        loader={
          altImage == "en" ||
          altImage == "hw" ||
          altImage == "main heater img" ? (
            <></>
          ) : (
            <div>
              <LoadingCardsAnimals />
            </div>
          )
        }
        alt={altImage}
        onClick={activeFunction ? () => activeFunction() : undefined}
      />
    </>
  );
};


export default ShowAsyncImage;