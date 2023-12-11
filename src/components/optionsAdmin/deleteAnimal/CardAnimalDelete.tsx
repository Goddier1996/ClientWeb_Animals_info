import Swal from "sweetalert2";
import { DeleteAnimal } from "../../../Server/DeleteDataApi";


const CardAnimalDelete: React.FC<{ data: any }> = ({ data }) => {



  const DeleteAnimalFromDataBase = async (Id: string) => {
    
    await DeleteAnimal(Id);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Deleted successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      sessionStorage.clear();
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