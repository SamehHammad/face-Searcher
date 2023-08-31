import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import "./popup.css";
import Swal from "sweetalert2";

const Popup = ({ onUpload, closePopup, toggleResultsPage }) => {
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [localImg, setLocalImg] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    localStorage.setItem("img", fileReader.readAsDataURL(file));
    onUpload(file);
  };

  useEffect(() => {
    const localImg = localStorage.getItem("img");
    if (localImg) {
      setLocalImg(JSON.parse(localImg));
    }
  }, [localImg]);

  const handleSearch = () => {
    let timerInterval;
    Swal.fire({
      title: "Wait",
      html: "We Are Check <b></b> Your Image!.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    setTimeout(() => {
      closePopup();
      toggleResultsPage();
    }, 2000);
  };

  return (
    <div className="outer-Popup">
      <div className="inner-popup">
        <div>
          <div onClick={closePopup} className="close-btn">
            <h1>x</h1>
          </div>
          <div className=" d-flex">
            {previewImage && (
              <Image
                src={previewImage}
                width={50}
                className="img-preview me-2"
              />
            )}
            <input
              className="form-control form-control-md mb-3"
              id="formFileLg"
              type="file"
              name="file"
              onChange={handleUpload}
            />
          </div>
          <input type="checkbox" id="agree" name="agree" />
          <label id="agree" name="agree">
            Agree
          </label>
          <button
            className="btn btn-outline-secondary d-block m-auto mt-5 "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
