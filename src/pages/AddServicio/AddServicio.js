import React from "react";
import "./AddServicio.css";

function AddServicio({ setOpenAddServicio }) {
  return (
    <div className="AddServicioBackground">
      <div className="AddServicioContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenAddServicio(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenAddServicio(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default AddServicio;