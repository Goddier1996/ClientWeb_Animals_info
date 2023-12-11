

const CheckIfHaveThisAnimals: React.FC<{
    checkIfHaveValueWhenSearchEnglishLanguage: number;
    checkIfHaveValueWhenSearchHebrewLanguage: number;
    animalDontFoundInDataBaseTitle: string;
    animalDontFoundInDataBaseTitleSendToAdminMessage: string;
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
            src="https://media.tenor.com/IbZePZ2opZkAAAAi/rascal-nothing-to-see-here.gif"
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