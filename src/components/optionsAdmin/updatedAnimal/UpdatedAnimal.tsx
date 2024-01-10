import { useState, useEffect } from "react";
import "../../../css/home.css";
import { Form, Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { updateInDateAnimal } from "../../../Server/AddDataOrUpdatedApi";
import {
  ObjectCustomHookIdInfo,
  ValueAddOrUpdatedNewAnimal,
} from "../../../interface/info.model";
import { FetchDataInfoId } from "../../../customHook/FetchDataInfoId";
import Loading from "../../tools/LoadingStyle/loadingItems/Loading";



const UpdatedInfo: React.FC<{ idAnimal: string }> = ({ idAnimal }) => {


  //value input a Updated animal
  const [title, setTitle] = useState<string>("");
  const [eat, setEat] = useState<string>("");
  const [infoAnimal, setInfoAnimal] = useState<string>("");
  const [infoImage, setInfoImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [eatImage, setEatImage] = useState<string>("");
  const [notEatImage, setNotEatImage] = useState<string>("");


  const [saveOpjDataSendToCustomHook, SetSaveOpjDataSendToCustomHook] =
    useState<ObjectCustomHookIdInfo>({});
  // customHook
  const { data, loading } = FetchDataInfoId(saveOpjDataSendToCustomHook);


  // here load a info animal with id data base
  const LoadAnimalInfo = () => {
    SetSaveOpjDataSendToCustomHook({
      typeHowUse: "englishLanguage",
      id: idAnimal,
    });
  };


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


  // here check input value if was empty , and check a links if good
  const CheckInputValue = () => {
    let x: boolean = isValidUrl(sound);
    let x1: boolean = isValidUrl(image);
    let x2: boolean = isValidUrl(infoImage);

    if (
      sound === "" ||
      image === "" ||
      title === "" ||
      eat === "" ||
      infoAnimal === "" ||
      infoImage === "" ||
      notEatImage === "" ||
      eatImage === "" ||
      x == false ||
      x1 == false ||
      x2 == false
    ) {
      Swal.fire({
        position: "top",
        confirmButtonColor: "green",
        icon: "error",
        title: "Oops...",
        html: '<p class="popUpTextP1">you need input value please Or Url link don`t Good</p>',
      });

      return;
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Updated successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        updateDateAnimal();
        window.location.reload();
      });
    }
  };


  // here Admin Update a info Animal
  const updateDateAnimal = async () => {
    let Animal: ValueAddOrUpdatedNewAnimal = {
      title: title,
      sound: sound,
      image: image,
      eat: eat,
      infoAnimal: infoAnimal,
      infoImage: infoImage,
      notEatImage: notEatImage,
      eatImage: eatImage,
    };

    await updateInDateAnimal(Animal, idAnimal);
  };


  useEffect(() => {
    LoadAnimalInfo();
  }, [idAnimal]);



  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="titleHeater">
            <h1>
              Updated Info Animal {data.title}{" "}
              <img src={data.image} style={{ height: "65px" }} alt="Updated" />
            </h1>
          </div>

          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder={data.title}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder={data.eat}
                value={eat}
                onChange={(event) => setEat(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="url"
                placeholder={data.sound}
                value={sound}
                onChange={(event) => setSound(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="url"
                placeholder={data.image}
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder={data.infoAnimal}
                value={infoAnimal}
                onChange={(event) => setInfoAnimal(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="url"
                placeholder={data.infoImage}
                value={infoImage}
                onChange={(event) => setInfoImage(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="url"
                placeholder={data.eatImage}
                value={eatImage}
                onChange={(event) => setEatImage(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="url"
                placeholder={data.notEatImage}
                value={notEatImage}
                onChange={(event) => setNotEatImage(event.target.value)}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" onClick={CheckInputValue}>
              Updated
            </Button>
          </Modal.Footer>
        </>
      )}
    </div>
  );
};


export default UpdatedInfo;