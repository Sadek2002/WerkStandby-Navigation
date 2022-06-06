import "../src/styles.css";
import React from "react";
import logo from "/img/stap1.png";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Dropdown from "../src/components/Dropdown";
import Delay from "../src/components/Delay";
import Progression from "../src/components/Progressbar";

function Stap1() {
  return (
    <nav className="container mb-4 mt-4">
      <div className="whiteBox">
        <Dropdown />
        <div className="row">
          <div className="col-10"></div>
          <div className="col-2"></div>
        </div>

        <p className="whiteBoxTitle">
          <FormattedMessage
            defaultMessage="Wat je vooraf moet weten"
            id="app.title"
            values={{
              fileName: "src/App.js",
              code: (word) => <strong>{word}</strong>
            }}
          />
        </p>

        <p className="whiteBoxText">
          <FormattedMessage
            defaultMessage="De volgende punten zijn belangrijk om te weten voor je aan de slag
            gaat als vrije werker:"
            id="app.text1"
            values={{
              fileName: "src/App.js",
              code: (word) => <strong>{word}</strong>
            }}
          />
        </p>

        <p className="whiteBoxCyanText">
          <FormattedMessage
            defaultMessage="Klik op de groene 'verder' knop als je de tekst gelezen hebt."
            id="app.cyantext"
            values={{
              fileName: "src/App.js",
              code: (word) => <strong>{word}</strong>
            }}
          />
        </p>

        <div>
          <img class="image-css" alt="test" src={logo}></img>
        </div>

        <div className="wrapper">
          <p className="whiteBoxSubtitle">
            <FormattedMessage
              defaultMessage="1. Eigen baas"
              id="subtitle"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Als vrije werker ben je een freelancer (zonder inschrijving bij de
              KvK)."
              id="app.text2"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Je bepaalt dus zelf welke klussen je aanneemt!"
              id="app.text3"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>
        </div>

        <div class="box">
          <div className="emptyMargin"></div>
          <div className="flexButton">
            <Delay />
            <button className="whiteBoxButton" id="Button">
              <Link to="/Stap2">
                <FormattedMessage
                  defaultMessage="Verder"
                  id="app.button"
                  values={{
                    fileName: "src/App.js",
                    code: (word) => <strong>{word}</strong>
                  }}
                />
              </Link>
            </button>
          </div>
        </div>

        <div class="progress">
          <div class="progress-done" data-done="70"></div>
          <Progression />
        </div>
      </div>
    </nav>
  );
}
export default Stap1;
