import "./posibility.css";
import possibilityImage from "../../assets/possibility.png";

const Posibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="posibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error recusandae necessitatibus
          alias quos nesciunt? Saepe?
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Posibility;
