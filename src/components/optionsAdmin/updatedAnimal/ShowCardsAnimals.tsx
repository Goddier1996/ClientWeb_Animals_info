
const ShowCardsAnimals: React.FC<{infoAnimal:any,AnimalChoose:Function}> = ({infoAnimal,AnimalChoose}) => {

  return (
    <>
      <div key={infoAnimal._id} className="cardDeleteOrUpdated">
        <div className="card_image">
          <img
            src={infoAnimal.image}
            alt="card animal"
            onClick={() => AnimalChoose(infoAnimal._id)}
          />
        </div>
      </div>
    </>
  );
};



export default ShowCardsAnimals;