import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

const Home = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((data) => {
        console.log("Get API Success: ", data);
        setRobots(data.data);
      })
      .catch((error) => console.log("Get API Error: ", error));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </>
  );
};

export default Home;
