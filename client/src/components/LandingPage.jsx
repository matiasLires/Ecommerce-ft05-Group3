import React from "react";
import "./LandingPage.css";
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing">
      <img
        className="landing-container"
        src={"/images/bg.jpg"}
        alt="fondo"
      ></img>
      <img className="card-image" src={"/images/imagen.png"} alt="logo"></img>
      <div className="content-container">
        <p className="title-cyber">Cyber Fitness</p>
        <p className="subtitle-shop">Online Shopping</p>
        <Link to="/user/catalogo">
          <button className="get-started">Get started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
