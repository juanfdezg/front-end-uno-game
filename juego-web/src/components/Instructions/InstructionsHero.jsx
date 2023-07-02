import React from "react";
import "./InstructionsHero.css";

function InstructionsHero(props) {
  return (
    <>
      <div className={props.cName}>
        <img id="instr" src={props.instructionsImg} alt="instructionsImg" />
      
        <div className="instructions-text">

            <h1>{props.title}</h1>
            <p>{props.text}</p>

        </div>
      </div>


    </>
  );
}

export default InstructionsHero;