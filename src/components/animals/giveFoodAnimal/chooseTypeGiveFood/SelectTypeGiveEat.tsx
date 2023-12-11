
const SelectTypeGiveEat: React.FC<{
    imgSelect: string;
    handleShow: any;
  typeSelect: string;
}> = ({ imgSelect, handleShow, typeSelect }) => {


  return (
    <>
      <img src={imgSelect} alt={typeSelect} onClick={()=>handleShow()}></img>
    </>
  );
};


export default SelectTypeGiveEat;