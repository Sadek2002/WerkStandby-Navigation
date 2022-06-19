import React from "react";
import ImageUploading from "react-images-uploading";
import "../src/styles.css";
import Dropdown from "../src/components/Dropdown";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Delay from "../src/components/Delay";
import Progression from "../src/components/Progressbar";

function UploadAchterkant() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateindex) => {
    console.log(imageList, addUpdateindex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <nav className="container mb-4 mt-4">
            <div className="whiteBox">
              <Dropdown />
              <div className="row">
                <div className="col-10"></div>
                <div className="col-2"></div>
              </div>

              <p className="whiteBoxTitle">
                <FormattedMessage
                  defaultMessage="Verifeer je identiteit"
                  id="Stap2_app.title"
                  values={{
                    fileName: "src/App.js",
                    code: (word) => <strong>{word}</strong>
                  }}
                />
              </p>

              <br></br>

              <p className="uploadText">
                <FormattedMessage
                  defaultMessage="Om als vrije werker aan de slag te kunnen moet een Europese identiteitskaart of paspoort hebben. Deze moet je uploaden zodat wij deze kunnen controleren."
                  id="Stap2_app.title"
                  values={{
                    fileName: "src/App.js",
                    code: (word) => <strong>{word}</strong>
                  }}
                />
              </p>

              <br></br>

              <p className="uploadText">
                <FormattedMessage
                  defaultMessage="Wat is je nationaliteit?"
                  id="Stap2_app.title"
                  values={{
                    fileName: "src/App.js",
                    code: (word) => <strong>{word}</strong>
                  }}
                />
              </p>

              <select
                name="nationality"
                id="nationality"
                defaultMessage="Kies een land"
              >
                <option value="Nederlands">Nederlands</option>
                <option value="Polskie">Polskie</option>
                <option value="Ukrayina">Ukrayina</option>
              </select>

              <br></br>
              <br></br>

              <div className="identityBox">
                <button
                  className="identityButton"
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Klik om je identiteitsbewijs te uploaden (Foto achterkant
                  identiteitskaart)
                </button>

                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img
                      src={image["data_url"]}
                      alt=""
                      className="uploadedImage"
                      onClick={() => onImageUpdate(index)}
                    />
                    <div className="image-item_btn-wrapper"></div>
                    <p className="imageText">
                      <FormattedMessage
                        defaultMessage="Klik op de toegevoegde foto om het te wijzigen"
                        id="Stap2_app.title"
                        values={{
                          fileName: "src/App.js",
                          code: (word) => <strong>{word}</strong>
                        }}
                      />
                    </p>
                  </div>
                ))}
              </div>

              <div className="flexButton">
                <button className="whiteBoxButtonBack">
                  <Link to="/Upload">
                    <FormattedMessage
                      defaultMessage="◀&nbsp;&nbsp;&nbsp;Terug"
                      id="Stap3_app.button"
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
                      <Link to="/UploadAchterkant">
                        <FormattedMessage
                          defaultMessage="Verder&nbsp;&nbsp;&nbsp;▶"
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
              </div>
              <Progression barwidth="100%" />
            </div>
          </nav>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadAchterkant;
