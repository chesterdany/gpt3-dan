import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eaque.",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eaque.",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eaque.",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eaque.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It.Step into Future Today & Make it Happen.
        </h1>
        <p>Request early access</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map(({ title, text }, index) => (
          <Feature key={index + title} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
