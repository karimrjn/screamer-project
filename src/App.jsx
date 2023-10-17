import React, { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <div className="App">
      <div className="content">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-fr/" target="_blank">
          <img
            src="src/images/wcs-logo.png"
            className="logo Wild Code School"
            alt="WCS logo"
          />
        </a>

        <h1>Vite comme à la Wild Code School</h1>

        <div className="card">
          <div className="cat">
            <Counter />
          </div>
          <p>
            La Wild Code School est une école de programmation et de
            développement web qui propose des formations intensives en
            informatique. Elle se caractérise par son approche "apprentissage
            par la pratique" et ses cours axés sur des compétences concrètes en
            programmation, développement web et mobile. Les étudiants y
            apprennent à travers des projets réels et bénéficient d'un
            environnement d'apprentissage collaboratif. L'école est réputée pour
            son enseignement axé sur la résolution de problèmes et la
            préparation des étudiants à des carrières dans le secteur de la
            technologie..
          </p>
        </div>
        <p className="read-the-docs">Wild Code School forever</p>
      </div>
    </div>
  );
}

export default App;
