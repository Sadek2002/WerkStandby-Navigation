import "../src/styles.css";
import React from "react";
import logo from "/img/stap8.png";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Dropdown from "../src/components/Dropdown";

function Stap8() {
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
              defaultMessage="4. Flexibel in overleg"
              id="Stap2_subtitle"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Als je een dienst pakt, wordt je verwacht."
              id="Stap2_app.text2"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Je kunt in overleg me de opdrachtgever andere uren afspreken."
              id="Stap2_app.text3"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="De opdrachtgever kan jou ook vragen of je langer wilt blijven werken, je mag zelf bepalen of je dit wilt."
              id="Stap2_app.text4"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="De extra uren krijg je altijd uitbetaald. Als het werk eerde is afgelopen dan geplant, mag de opdrachtgever jou wegsturen. Je krijgt dan alleen de gewerkte uren betaald."
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
            <Link to="/Stap7">
              <FormattedMessage
                defaultMessage="Terug"
                id="Stap7_app.button"
                values={{
                  fileName: "src/App.js",
                  code: (word) => <strong>{word}</strong>
                }}
              />
            </Link>
          </button>

          <div className="flexButton">
            <button className="whiteBoxButton">
              <Link to="/Stap8">
                <FormattedMessage
                  defaultMessage="Verder"
                  id="Stap8_app.button"
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

export default Stap8;
