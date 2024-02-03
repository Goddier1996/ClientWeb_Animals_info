import ShowAsyncImage from "../../../tools/AsyncImages/ShowAsyncImage";


const SelectTypeGiveEat: React.FC<{
  imgSelect: string;
  handleShow: Function;
  typeSelect: string;
}> = ({ imgSelect, handleShow, typeSelect }) => {

  return (
    <ShowAsyncImage
      imgShow={imgSelect}
      widthImg={"130px"}
      heightImg={"130px"}
      altImage={typeSelect}
      typeAnimation={"Zoom"}
      activeFunction={() => handleShow()}
    />
  );
};


export default SelectTypeGiveEat;