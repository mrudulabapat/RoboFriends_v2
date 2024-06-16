import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Create = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newRobot, setNewRobot] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRobotData = { id, name, email };
    console.log(newRobotData);

    axios
      .post("http://localhost:8081/create", newRobotData)
      .then((res) => {
        console.log("Create API Response", res);
        navigate("/");
      })
      .catch((error) => console.log("Create API Error: ", error));
  };

  return (
    <div className="tc">
      <form
        class="measure center pa4 br3 shadow-3 ma4 bg-lightest-blue"
        onSubmit={handleSubmit}
      >
        <legend class="f2 fw7 ma3">Create Robot</legend>

        <div class="mt3">
          <label class="db fw6 lh-copy f4" htmlFor="robot-id">
            Enter Robot ID:
          </label>
          <input
            class="pa2 input-reset ba b--black-20 bg-white w-100 br2"
            type="number"
            name="robot-id"
            id="robot-id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <label class="db fw6 lh-copy f4" htmlFor="robot-name">
            Enter Robot Name:
          </label>
          <input
            class="pa2 input-reset ba b--black-20 bg-white w-100 br2"
            type="text"
            name="robot-name"
            id="robot-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label class="db fw6 lh-copy f4" htmlFor="email-address">
            Email
          </label>
          <input
            class="pa2 input-reset ba b--black-20 bg-white w-100 br2"
            type="email"
            name="email-address"
            id="email-address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          class="white b mt4 pa3 w-100 bg-blue hover-bg-gray bt-0 br-0 bl-0 bb bw2 b--mid-gray br2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
