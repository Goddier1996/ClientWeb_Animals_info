import { Button, Popover, OverlayTrigger } from "react-bootstrap";


const OverlayTriggerWhatAnimalEat: React.FC = () => {


  let animalData = JSON.parse(sessionStorage.getItem("animal") as any);

    
  //show info what animal eat - when click in pop up info
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{animalData.name} eat</Popover.Header>
      <Popover.Body>{animalData.eat}</Popover.Body>
    </Popover>
  );

    
    
  return (
    <>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="outline-light">
          <img src="https://img.icons8.com/ios/50/000000/info--v1.png" />
        </Button>
      </OverlayTrigger>
    </>
  );
};



export default OverlayTriggerWhatAnimalEat;