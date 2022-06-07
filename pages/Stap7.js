import "../src/styles.css";
import React from "react";
import logo from "/img/stap7.png";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Dropdown from "../src/components/Dropdown";
import Delay from "../src/components/Delay";
import Progression from "../src/components/Progressbar";

function Stap7() {
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
              defaultMessage="3. Afmelden"
              id="Stap2_subtitle"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Als je een dienst pakt, wordt je verwacht je verwacht. Toch liever niet werken? Dan kun je de dienst ter ruil aanbieden in de app."
              id="Stap2_app.text2"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Is er niemand anders die de diesnt wilt overnemen? Dan wordt je alsnog verwacht. Is er echt een probleem? Neem dan contact op met jouw contactpersoon."
              id="Stap2_app.text3"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Als je ziek bent moet je dit zo snel mogelijk melden aan jouw contactpersoon en de opdrachtgever. Je hebt niet gewerkt en krijgt deze uren dus niet uitbetaald."
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
            <Link to="/Stap6">
              <FormattedMessage
                defaultMessage="◀&nbsp;&nbsp;&nbsp;Terug"
                id="Stap6_app.button"
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
                <Link to="/Stap8">
                  <FormattedMessage
                    defaultMessage="Verder&nbsp;&nbsp;&nbsp;▶"
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
        </div>

        <Progression barwidth="85%" />
      </div>
    </nav>
  );
}

export default Stap7;
