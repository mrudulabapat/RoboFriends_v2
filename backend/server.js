const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

app.use(cors());

//DB Connectivity
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "robofriends",
});

//GET API Call
app.get("/", (req, res) => {
  const sql = "SELECT * from robo";
  db.query(sql, (error, data) => {
    if (error) return res.status(404).send("Error");
    return res.status(200).send(data);
  });
});

//GET API Call with ID
app.get("/:id", (req, res) => {
  const sql = "SELECT * from robo WHERE ID = ?";
  const id = [req.params.id];
  db.query(sql, [id], (error, data) => {
    if (error) return res.status(404).send("Error");
    return res.status(200).send(data);
  });
});

//POST API Call
app.post("/create", (req, res) => {
  const sql = "INSERT INTO robo (`id`, `name`, `email`) VALUES (?)";
  const values = [req.body.id, req.body.name, req.body.email];
  db.query(sql, [values], (error, data) => {
    if (error) return res.status(400).send("Error");
    return res.status(200).send(data);
  });
});

//PUT API Call
app.put("/update/:id", (req, res) => {
  const sql = "UPDATE robo SET name = ?, email = ? WHERE ID = ?";
  const values = [req.body.name, req.body.email];
  const id = [req.params.id];

  db.query(sql, [...values, id], (error, data) => {
    if (error) return res.status(400).send("Error");
    return res.status(200).send(data);
  });
});

//DELETE API Call
app.delete("/robo/:id", (req, res) => {
  const sql = "DELETE FROM robo WHERE ID = ?";
  const id = [req.params.id];

  db.query(sql, [id], (error, data) => {
    if (error) return res.status(400).send("Error");
    return res.status(200).send(data);
  });
});

app.listen(8081, () => {
  console.log("Listening");
});
