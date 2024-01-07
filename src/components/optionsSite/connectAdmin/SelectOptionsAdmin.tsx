import { Button, Form, Modal } from "react-bootstrap";


const SelectOptionsAdmin: React.FC<{
  logOutAdminData: Function;
  chooseForAdmin: Function;
}> = ({ logOutAdminData, chooseForAdmin }) => {


  return (
    <>
      <p className="closes" onClick={logOutAdminData()} aria-label="Close">
        &times;
      </p>

      <div className="titleHeater">
        <h1>
          Hello Admin , Choose one of the options{" "}
          <img
            src="https://i.postimg.cc/brk32DV6/Pngtree-anxious-confused-person-thinking-and-6707777.png"
            style={{ height: "200px" }}
          />
        </h1>
      </div>

        <Form>
          <div className="styleChioseOptionAdmin">
            <Button
              onClick={() => {
                chooseForAdmin(1);
              }}
              variant="primary"
            >
              Add new Animal
            </Button>
            <Button
              onClick={() => {
                chooseForAdmin(3);
              }}
              variant="secondary"
            >
              Updated Info Animal
            </Button>
            <Button
              onClick={() => {
                chooseForAdmin(2);
              }}
              variant="danger"
            >
              Delete Info Animal
            </Button>
          </div>
        </Form>
    </>
  );
};


export default SelectOptionsAdmin;