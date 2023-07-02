import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import CardPerson from "../../components/ContentAboutUs/CardPerson";

function AboutUs() {
  return (
    <main className="content">
      <div className="container">
        <img id="about-img" src="/coding-man.jpg" alt="" />
        <div className="intro">
          <h1>Nuestro equipo</h1>
          <p> Somos un par de estudiantes aficionados del juego UNO</p>
        </div>

        <div className="about-people">
          <CardPerson
            name="Juan Fernández"
            title="Front-end"
            text="Actualmente estudiando desarrollo web, donde busco crear 
            mi propia adaptación del famoso juego de cartas UNO, con mis propias reglas. Desde pequeño he sido apasionado por este increíble juego, por lo que me motiva mucho este proyecto."
            srcImg="/foto_juan.jpg"
          />

          <CardPerson
            name="Paul Mac Guire"
            title="Back-end"
            text="Soy un estudiante de ingeniería en informática, me gusta mucho el desarrollo web y la programación en general. Me gusta mucho el juego UNO, por lo que me parece un proyecto muy interesante, y me motiva mucho poder trabajar en él."
            srcImg="/foto_paul.jpg"
          />
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
