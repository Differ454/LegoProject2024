import React from "react";
import "./TextToSpeech.css";

const TextToSpeech = () => {
  return (
    <div className="perro">
      <form>
        <input className="btn btn-primary-perro" type="text" placeholder="What do you want to know?" />
        <button className="btn-perro"> <h3>Ask</h3></button>
      </form>
    </div>
  );
};

export default TextToSpeech;
