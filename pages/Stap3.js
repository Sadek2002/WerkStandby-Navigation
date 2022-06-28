import "../src/styles.css";
import React from "react";
import logo from "/img/stap3.png";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Dropdown from "../src/components/Dropdown";
import Delay from "../src/components/Delay";
import Progression from "../src/components/Progressbar";

function Stap3() {
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
              defaultMessage="3. Uitbetaling"
              id="Stap2_subtitle"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Je krijgt wekelijks uitbetaald"
              id="Stap2_app.text2"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Jouw betaling is bruto: hiervoor moet je dus nog belasting betalen!"
              id="Stap2_app.text3"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Hoeveel belasting je moet betalen hangt af van jouw totale inkomen per jaar."
              id="Stap2_app.text4"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>

          <p className="whiteBoxText2">
            <FormattedMessage
              defaultMessage="Verwacht je in totaal meer dan 6500 euro per jaar te verdienen? Dan adviseren wij jou om 10% van je vergoeding apart te zetten."
              id="Stap2_app.text5"
              values={{
                fileName: "src/App.js",
                code: (word) => <strong>{word}</strong>
              }}
            />
          </p>
        </div>

        <div className="flexButton">
          <button className="whiteBoxButtonBack">
            <Link to="/Stap2">
              <FormattedMessage
                defaultMessage="◀&nbsp;&nbsp;&nbsp;Terug"
                id="Stap2_app.button"
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
                <Link to="/Stap4">
                  <FormattedMessage
                    defaultMessage="Verder&nbsp;&nbsp;&nbsp;▶"
                    id="Stap4_app.button"
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

        <Progression barwidth="22.2%" />
      </div>
    </nav>
  );
}

export default Stap3;
