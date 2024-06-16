import React, { useState } from "react";
import "../App.css";
import PopUp from "./PopUp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Delete = () => {
  const [id, setId] = useState("");
  const [robotDel, setRobotDel] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const deleteClicked = (event) => {
    event.preventDefault();
    setShowConfirmation(true); // Show the confirmation popup
  };

  const handleConfirmDelete = () => {
    setShowConfirmation(false); // Hide the popup
    handleSubmit(); // Proceed with the deletion
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false); // Hide the popup without deleting
  };

  const handleSubmit = () => {
    axios
      .delete("http://localhost:8081/robo/" + id, id)
      .then((res) => {
        console.log("Delete API Response", res);
        navigate("/");
      })
      .catch((error) => console.log("Delete API Error: ", error));
  };

  return (
    <div className="tc">
      <form
        className="measure center pa4 br3 shadow-3 ma4 bg-lightest-blue"
        onSubmit={deleteClicked}
      >
        <legend className="f2 fw7 ma3">Delete Robot</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f4" htmlFor="robot-id">
            Enter Robot ID:
          </label>
          <input
            className="pa2 input-reset ba b--black-20 bg-white w-100 br2"
            type="text"
            name="robot-id"
            id="robot-id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="e.g., 1"
          />
        </div>
        <button
          type="submit"
          className="white b mt4 pa3 w-100 bg-dark-red hover-bg-red bt-0 br-0 bl-0 bb bw2 b--mid-gray br2"
        >
          Delete
        </button>
      </form>

      {showConfirmation && (
        <PopUp
          message="Are you sure you want to delete this robot?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default Delete;
