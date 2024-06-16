import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Edit = ({ robots, updateRobot }) => {
  console.log("Edit Component");
  const { id } = useParams();
  const [robot, setRobot] = useState({ id: "", name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/" + id, id)
      .then((data) => {
        console.log("Get API Success: ", data.data[0]);
        setRobot(data.data[0]);
      })
      .catch((error) => console.log("Get API Error: ", error));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("in handle change");
    setRobot((prevRobot) => ({
      ...prevRobot,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:8081/update/" + id, { ...robot, id })
      .then((res) => {
        console.log("Update API Response", res);
        navigate("/");
      })
      .catch((error) => console.log("Update API Error: ", error));
  };

  return (
    <div className="tc">
      <form
        class="measure center pa4 br3 shadow-3 ma4 bg-lightest-blue"
        onSubmit={handleSubmit}
      >
        <legend class="f2 fw7 ma3">Edit Robot</legend>

        <div class="mt3">
          <label class="db fw6 lh-copy f4" htmlFor="robot-id">
            Enter Robot ID:
          </label>
          <input
            class="pa2 input-reset ba b--black-20 bg-white w-100 br2"
            type="text"
            name="id"
            id="robot-id"
            value={robot.id}
            readOnly
          />

          <label class="db fw6 lh-copy f4" htmlFor="robot-name">
            Enter Name:
          </label>
          <input
            class="pa2 input-reset ba b--black-20 bg-white w-100 br2"
            type="text"
            name="name"
            id="robot-name"
            value={robot.name}
            onChange={handleChange}
          />

          <label class="db fw6 lh-copy f4" htmlFor="robot-email">
            Enter Email:
          </label>
          <input
            class="pa2 input-reset ba b--black-20 bg-white w-100 br2"
            type="email"
            name="email"
            id="robot-email"
            value={robot.email}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          class="white b mt4 pa3 w-100 bg-blue hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Edit;
