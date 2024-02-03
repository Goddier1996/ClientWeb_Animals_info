import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyImg } from "../../../interface/info.model";


// use LazyLoadImage at main img in heater
// why don't use AsyncImage in img heater, because performance don't good
const ShowLazyImageHeaterImg: React.FC<LazyImg> = (props) => {

  return (
    <LazyLoadImage
      src={props.src}
      width={"100%"}
      height={props.height ? props.height * 1 : ""}
      style={{ objectFit: "cover" }}
      effect="blur"
      alt={props.alt}
    />
  );
};


export default ShowLazyImageHeaterImg;
