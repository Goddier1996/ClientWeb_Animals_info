import { useState } from "react";
import "../../css/home.css";
import { Form, Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { addAnimal } from "../../Server/AddDataOrUpdatedApi";
import { ValueAddOrUpdatedNewAnimal } from "../../interface/info.model";


const AddAnimal: React.FC = () => {

  
  //value input a add new animal
  const [title, setTitle] = useState<string>("");
  const [eat, setEat] = useState<string>("");
  const [infoAnimal, setInfoAnimal] = useState<string>("");
  const [infoImage, setInfoImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [eatImage, setEatImage] = useState<string>("");
  const [notEatImage, setNotEatImage] = useState<string>("");




  //check url input image and sound  - 1
  const isValidUrl = (urlString: string) => {

    let urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator

    return !!urlPattern.test(urlString);
  };



  //check url input image and sound   - 2
  const checkValue = () => {

    // check url input
    let soundUrl: boolean = isValidUrl(sound);
    let imageUrl: boolean = isValidUrl(image);
    let infoImageUrl: boolean = isValidUrl(infoImage);

    if (
      sound === "" ||
      image === "" ||
      title === "" ||
      eat === "" ||
      infoAnimal === "" ||
      notEatImage === "" ||
      eatImage === "" ||
      soundUrl == false ||
      imageUrl == false ||
      infoImageUrl == false
    )
    {
      Swal.fire({
        position: "center",
        confirmButtonColor: "green",
        icon: "error",
        title: "Oops...",
        html: '<p class="popUpTextP1">you need input value please Or Url link don`t Good</p>',
      });

      return;
    }

    if (soundUrl == true && imageUrl == true && infoImageUrl == true) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Add successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        
        addNewAnimal();
        window.location.reload();
      });
    }
  };



  const addNewAnimal = async () => {

    let user:ValueAddOrUpdatedNewAnimal = {
      title: title,
      sound: sound,
      image: image,
      eat: eat,
      infoAnimal: infoAnimal,
      infoImage: infoImage,
      notEatImage: notEatImage,
      eatImage: eatImage,
    };

    await addAnimal(user)
  };


  

  return (
    <div>
      <div className="titleHeater">
        <h1>
          Add a new Animal{" "}
          <img
            src="https://i.postimg.cc/85D0BbW2/Basic-Ui-544.jpg"
            alt="new animal"
            style={{ height: "40px" }}
          />
        </h1>
      </div>

      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="please input name Animal"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            autoFocus
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="input what this animal eat"
            value={eat}
            onChange={(event) => setEat(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="url"
            placeholder="link url sound"
            value={sound}
            onChange={(event) => setSound(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="url"
            placeholder="link url image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="info animal"
            value={infoAnimal}
            onChange={(event) => setInfoAnimal(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="url"
            placeholder="link url info image"
            value={infoImage}
            onChange={(event) => setInfoImage(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="url"
            placeholder="link url image what eat animal"
            value={eatImage}
            onChange={(event) => setEatImage(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="url"
            placeholder="link url image what not eat animal"
            value={notEatImage}
            onChange={(event) => setNotEatImage(event.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={checkValue}>
          Add new Animal
        </Button>
      </Modal.Footer>
      
    </div>
  );
};


export default AddAnimal;