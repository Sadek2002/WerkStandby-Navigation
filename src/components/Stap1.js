import "../styles.css";
import React, { useContext } from "react";
import logo from "/img/image.png";
import { FormattedMessage } from "react-intl";
import { Context } from "../components/Wrapper";
import { Link } from "react-router-dom";

function Stap1(props) {
  const context = useContext(Context);

  return (
    <nav className="container mb-4 mt-4">
      <div className="whiteBox">
        <div className="row">
          <div className="col-10"></div>
          <div className="col-2">
            <select
              className="dropdown"
              value={context.locale}
              onChange={context.selectLanguage}
            >
              <option value="nl">Nederlands</option>
              <option value="en">English</option>
              <option value="pl">Polskie</option>
            </select>
          </div>
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

        <img class="image-css" alt="test" src={logo}></img>

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

        <button className="whiteBoxButton">
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
    </nav>
  );
}

export default Stap1;
