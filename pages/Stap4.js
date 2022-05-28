import "../src/styles.css";
import React from "react";
import logo from "/img/stap4.png";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Dropdown from "../src/components/Dropdown";

function Stap4() {
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
            id="Stap2_app.title"
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
              defaultMessage="4. Belasting"
              id="Stap2_subtitle"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Werk Standby geeft de vergoedingen die jij hebt ontvangen jaarlijks door aan de Belastingdienst."
              id="Stap2_app.text2"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Dit jaarlijkse overzicht onvang je ook zelf en kun je gebruiken bij je inkomstenbelasting."
              id="Stap2_app.text3"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Je hoeft dus zelf geen BTW aangifte te doen."
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
            <Link to="/Stap3">
              <FormattedMessage
                defaultMessage="Terug"
                id="Stap3_app.button"
                values={{
                  fileName: "src/App.js",
                  code: (word) => <strong>{word}</strong>
                }}
              />
            </Link>
          </button>

          <div className="flexButton">
            <button className="whiteBoxButton">
              <Link to="/Stap5">
                <FormattedMessage
                  defaultMessage="Verder"
                  id="Stap5_app.button"
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

export default Stap4;
