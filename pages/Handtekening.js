import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignaturePad from "react-signature-canvas";
import styles from "../src/styles.css";
import modifyPdf from "../src/components/Pdf-script";

class Handtekening extends Component {
  state = { trimmedDataURL: null };
  sigPad = {};
  clear = () => {
    this.sigPad.clear();
  };
  trim = () => {
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png")
    });
    const click = () =>{
      localStorage.setItem(trimmedDataURL, trim)
      }
  };
  
  render() {
    let { trimmedDataURL } = this.state;
    return (
      <div className="whiteBox">
        <p className="whiteBoxTitle">
          Teken hieronder als je akkoord gaat om als vrijewerker in te schrijven
        </p>
        <div className="signatureBox">
          <div className={styles.sigContainer}>
            <SignaturePad
              canvasProps={{ className: styles.sigPad }}
              ref={(ref) => {
                this.sigPad = ref;
              }}
            />
          </div>
          <div className="buttonWrapper">
            <button className="buttons" onClick={this.clear}>
              Clear
            </button>
            <button className="buttons" onClick={this.trim} {th}>
              Trim
            </button>
          </div>
          {trimmedDataURL ? (
            <img className="trimmedImage" src={trimmedDataURL} alt="" />
          ) : null}
        </div>
        <button className="buttons" onClick={modifyPdf}>Modify PDF</button>
      </div>
    );
  }
}

ReactDOM.render(<Handtekening />, document.getElementById("root"));
export default Handtekening;