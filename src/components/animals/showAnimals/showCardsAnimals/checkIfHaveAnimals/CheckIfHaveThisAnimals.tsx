import ShowAsyncImage from "../../../../tools/AsyncImages/ShowAsyncImage";
import "./dontHaveAnimals.css";


const CheckIfHaveThisAnimals: React.FC<{
  checkIfHaveValueWhenSearchEnglishLanguage: Number;
  animalDontFoundInDataBaseTitle: String;
}> = ({
  checkIfHaveValueWhenSearchEnglishLanguage,
  animalDontFoundInDataBaseTitle,
}) => {

  return (
    <>
      {!checkIfHaveValueWhenSearchEnglishLanguage ? (
        <div className="dontHaveThisValueInArray">
          <ShowAsyncImage
            imgShow="https://i.postimg.cc/B6tXwjnh/999.webp"
            widthImg={"160px"}
            heightImg={"160px"}
            altImage={"dont have this animal"}
            typeAnimation={"Zoom"}
            activeFunction={undefined}
          />
          {/* <p>{animalDontFoundInDataBaseTitle}</p> */}
        </div>
      ) : (
        ""
      )}
    </>
  );
};


export default CheckIfHaveThisAnimals;