import "./dontHaveAnimals.css"


const CheckIfHaveThisAnimals: React.FC<{
    checkIfHaveValueWhenSearchEnglishLanguage: number;
    checkIfHaveValueWhenSearchHebrewLanguage: number;
    animalDontFoundInDataBaseTitle: String;
    animalDontFoundInDataBaseTitleSendToAdminMessage: String;
}> = ({
  checkIfHaveValueWhenSearchEnglishLanguage,
  checkIfHaveValueWhenSearchHebrewLanguage,
  animalDontFoundInDataBaseTitle,
  animalDontFoundInDataBaseTitleSendToAdminMessage,
}) => {


  return (
    <>
      {checkIfHaveValueWhenSearchEnglishLanguage === 0 &&
      checkIfHaveValueWhenSearchHebrewLanguage === 0 ? (
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