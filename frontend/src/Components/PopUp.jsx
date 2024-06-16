import React from "react";

const PopUp = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed top-0 left-0 w-100 h-100 bg-black-70 flex items-center justify-center z-5">
      <div className="bg-white pa4 br3 shadow-3 tc">
        <h3 className="f3 mb4">{message}</h3>
        <div className="flex justify-center">
          <button
            onClick={onConfirm}
            className="f5 link dim br2 ph3 pv2 mb2 dib white bg-dark-green mr3"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="f5 link dim br2 ph3 pv2 mb2 dib white bg-dark-red"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
