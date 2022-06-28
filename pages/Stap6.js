import "../src/styles.css";
import React from "react";
import logo from "/img/stap6.png";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Dropdown from "../src/components/Dropdown";
import Delay from "../src/components/Delay";
import Progression from "../src/components/Progressbar";

function Stap6() {
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
              defaultMessage="2. Uren doorgeven"
              id="Stap2_subtitle"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Nadat je hebt gewerkt moet jouw opdrachtgever de gewerkte uren goedkeuren."
              id="Stap2_app.text2"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Heb je andere uren gewerkt dan de geplande diensten."
              id="Stap2_app.text3"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Dan kun je dit zelf alvast doorgeven via de app."
              id="Stap2_app.text4"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Alle uren die voor maandag 23.59 bij ons binnen zijn, worden op woensdag uitbetaald."
              id="Stap2_app.text4"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>
        </div>

        <div className="flexButton">
          <button className="whiteBoxButtonBack">
            <Link to="/Stap5">
              <FormattedMessage
                defaultMessage="◀&nbsp;&nbsp;&nbsp;Terug"
                id="Stap5_app.button"
                values={{
                  fileName: "src/App.js",
                  code: (word) => <strong>{word}</strong>
                }}
              />
            </Link>
          </button>

          <div class="box">
            <div className="flexButton">
              <Delay />
              <button className="whiteBoxButton">
                <Link to="/Stap7">
                  <FormattedMessage
                    defaultMessage="Verder&nbsp;&nbsp;&nbsp;▶"
                    id="Stap7_app.button"
                    values={{
                      fileName: "src/App.js",
                      code: (word) => <strong>{word}</strong>
                    }}
                  />
                </Link>
              </button>
            </div>
          </div>
        </div>

        <Progression barwidth="55.5%" />
      </div>
    </nav>
  );
}

export default Stap6;
