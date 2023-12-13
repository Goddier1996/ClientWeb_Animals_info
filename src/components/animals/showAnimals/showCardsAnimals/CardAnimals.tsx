import {AnimalsInfo} from "../../../../interface/info.model"


const CardAnimals: React.FC<{
  dataAllAnimals: AnimalsInfo;
  clickToImageForInfo: Function;
  start: Function;
}> = ({ dataAllAnimals, clickToImageForInfo, start }) => {


  return (
    <>
      <div key={dataAllAnimals._id} className="cardx">
        <div className="card_image">
          <img
            src={dataAllAnimals.image}
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
            src={require("../../../../images/bowel1.png")}
            alt="give eat"
          ></img>
        </div>
      </div>
    </>
  );
};


export default CardAnimals;