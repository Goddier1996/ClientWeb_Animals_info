import "./dontHaveAnimals.css"

const CheckIfHaveThisAnimals: React.FC<{
    checkIfHaveValueWhenSearchEnglishLanguage: Number;
    animalDontFoundInDataBaseTitle: String;
    animalDontFoundInDataBaseTitleSendToAdminMessage: String;
}> = ({
  checkIfHaveValueWhenSearchEnglishLanguage,
  animalDontFoundInDataBaseTitle,
  animalDontFoundInDataBaseTitleSendToAdminMessage,
}) => {

  return (
    <>
      {!checkIfHaveValueWhenSearchEnglishLanguage ? (
        <div className="dontHaveThisValueInArray">
          <img
            src="https://i.postimg.cc/B6tXwjnh/999.webp"
            alt="dont have this animal"
          />
          <br />
          <p>{animalDontFoundInDataBaseTitle}</p>
          <p>{animalDontFoundInDataBaseTitleSendToAdminMessage}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};


export default CheckIfHaveThisAnimals;