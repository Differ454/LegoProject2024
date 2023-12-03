import React from "react";
import "./Services.css";
import TextToSpeech from "../textToSpeech/TextToSpeech";


const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
       
       <TextToSpeech />
       {/* {ChatBot Canvas} */}





      </div>
    </section>
  );
}

export default Services;
