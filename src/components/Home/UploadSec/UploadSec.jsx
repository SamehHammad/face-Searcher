import React, { useState } from "react";
import "./uploadSec.css";
import Popup from "../Popup/Popup";
import Results from "./Results";
const UploadSec = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [resultPage, setResultPage] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
    };
    const toggleResultsPage = () => {
        setResultPage(!resultPage);
      };
  if (resultPage) {
    return <Results />;
  }
  return (
    <>
      {showPopup ? (
        <Popup closePopup={togglePopup} toggleResultsPage={toggleResultsPage} />
      ) : null}
      <div className="d-flex justify-content-center mt-5">
        <div className="drag-img" onClick={togglePopup}>
          <p>Click Here To Upload Picture</p>
        </div>
      </div>
    </>
  );
};

export default UploadSec;
