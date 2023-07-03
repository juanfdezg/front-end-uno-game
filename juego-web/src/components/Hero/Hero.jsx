import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img id="home" src={props.heroImg} alt="HeroImg" />
      
        <div className="hero-text">

            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass} onClick={props.buttonClick}>{props.buttonText}</a>

        </div>
      </div>


    </>
  );
}

export default Hero;