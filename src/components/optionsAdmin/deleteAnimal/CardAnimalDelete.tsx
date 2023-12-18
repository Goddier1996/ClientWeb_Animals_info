import Swal from "sweetalert2";
import { DeleteAnimal } from "../../../Server/DeleteDataApi";
import {AnimalsInfo} from "../../../interface/info.model"



const CardAnimalDelete: React.FC<{ data: AnimalsInfo }> = ({ data }) => {


  const DeleteAnimalFromDataBase = async (Id: string) => {
    
    await DeleteAnimal(Id);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Deleted successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.reload();
    });
  };

    
  return (
    <>
      <div key={data._id} className="cardDeleteOrUpdated">
        <div className="card_image">
          <img
            src={data.image}
            alt="Delete animal"
            onClick={() => DeleteAnimalFromDataBase(data._id)}
          />
        </div>
      </div>
    </>
  );
};



export default CardAnimalDelete;