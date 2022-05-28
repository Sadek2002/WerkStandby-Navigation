import "../src/styles.css";
import React from "react";
import logo from "/img/stap5.png";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Dropdown from "../src/components/Dropdown";

function Stap5() {
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
            defaultMessage="Wat moet je doen"
            id="Stap2_app.title"
            values={{
              fileName: "src/App.js",
              code: (word) => <strong>{word}</strong>
            }}
          />
        </p>

        <p className="whiteBoxText">
          <FormattedMessage
            defaultMessage="Deze dingen moet je doen om aan het werk te kunnen als vrije werker:"
            id="Stap2_app.text1"
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
              defaultMessage="1. Diensten pakken"
              id="Stap2_subtitle"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Nadat je je hebt aangemeld, maakt jou contactpersoon een account voor je aan in onze app."
              id="Stap2_app.text2"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Hierna kijg je een melding als er een open dienst beschikbaar is. Je pakt zelf de diensten die jij wilt werken."
              id="Stap2_app.text3"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Soms belt jouw contactpersoon je om te vragen of je wilt werken."
              id="Stap2_app.text4"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <div className="emptyMargin"></div>
        </div>

        <div className="flexButton">
          <button className="whiteBoxButtonBack">
            <Link to="/Stap4">
              <FormattedMessage
                defaultMessage="Terug"
                id="Stap4_app.button"
                values={{
                  fileName: "src/App.js",
                  code: (word) => <strong>{word}</strong>
                }}
              />
            </Link>
          </button>

          <div className="flexButton">
            <button className="whiteBoxButton">
              <Link to="/Stap6">
                <FormattedMessage
                  defaultMessage="Verder"
                  id="Stap6_app.button"
                  values={{
                    fileName: "src/App.js",
                    code: (word) => <strong>{word}</strong>
                  }}
                />
              </Link>
            </button>
          </div>
        </div>
        <div className="progressBar">
          <div>Work in progress</div>
        </div>
      </div>
    </nav>
  );
}

export default Stap5;
