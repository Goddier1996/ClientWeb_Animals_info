import ReCAPTCHA from "react-google-recaptcha";


const RobotBox: React.FC<{ activeRobotBox: Function }> = ({ activeRobotBox }) => {

  return (
    <div>
      <ReCAPTCHA
        className="g-recaptcha"
        sitekey={process.env.REACT_APP_RECAPTCHA || ""}
        onChange={()=>activeRobotBox()}
      />
    </div>
  );
};


export default RobotBox;