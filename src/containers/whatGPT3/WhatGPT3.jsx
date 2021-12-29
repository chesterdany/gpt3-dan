import { Feature } from "../../components";
import "./whatGpt3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing." />
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing." />
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing." />
      </div>
    </div>
  );
};

export default WhatGPT3;
