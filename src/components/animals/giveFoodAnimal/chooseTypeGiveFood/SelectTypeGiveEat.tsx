import { AsyncImage } from "loadable-image";
import LoadingCardsAnimals from "../../../tools/LoadingStyle/loadingItems/LoadingCardsAnimals";
import { Fade } from "transitions-kit";


const SelectTypeGiveEat: React.FC<{
  imgSelect: string;
  handleShow: Function;
  typeSelect: string;
}> = ({ imgSelect, handleShow, typeSelect }) => {


  return (
      <AsyncImage
        src={imgSelect}
        style={{
          width: 130,
          height: 130,
          objectFit: "cover",
        }}
        Transition={Fade}
        loader={
          <div>
            <LoadingCardsAnimals />
          </div>
        }
        alt={typeSelect}
        onClick={() => handleShow()}
      />
  );
};


export default SelectTypeGiveEat;