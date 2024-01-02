import {AnimalsInfo} from "../../../../interface/info.model"
import { AsyncImage } from 'loadable-image'
import { Fade  } from 'transitions-kit'
import LoadingCardsAnimals from "../../../tools/LoadingStyle/loadingItems/LoadingCardsAnimals";


const CardAnimals: React.FC<{
  dataAllAnimals: AnimalsInfo;
  clickToImageForInfo: Function;
  start: Function;
}> = ({ dataAllAnimals, clickToImageForInfo, start }) => {


  return (
    <>
      <div key={dataAllAnimals._id} className="cardx">
        <div className="card_image">
          <AsyncImage
            src={dataAllAnimals.image}
            style={{ width: 150, height: 150,objectFit:"cover",borderRadius:"40px"}}
            Transition={Fade }
            loader={<div><LoadingCardsAnimals/></div>}
            alt="image animal"
            onClick={() =>
              clickToImageForInfo(dataAllAnimals._id)
            }
          />
        </div>

        <div className="card_title title-white">
          <h6>{dataAllAnimals.title}</h6>

          <img
            onClick={() =>
              start(dataAllAnimals._id)
            }
            src="https://i.postimg.cc/fyh8t96R/bowel.webp"
            alt="give eat"
          />
        </div>
      </div>
    </>
  );
};


export default CardAnimals;