import React from "react";
import { Link } from "react-router-dom";
import "./CardPerson.css";

function Card({ name, title, text, srcImg }) {
  return (
    <main className="content">
      <div className="about-people">
        <div className="about-person">
          <img src={srcImg} alt="The Rock" />
          <h2>{name}</h2>
          <h3>{title}</h3>

          <p>{text}</p>
          <div className="social">
            <a href="https://www.facebook.com">
              <img src="/square-facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com">
              <img src="/linkedin.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com">
              <img src="/square-twitter.svg" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Card;
