const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// create mysql connection
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "employee_system",
});

// mysql connect
console.log(db.connect);
db.connect((err) => {
  if (err) {
    console.log("Something wrong!!", err);
  } else {
    console.log("Mysql connect established");
  }
});

//create
app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;
  db.query(
    "INSERT INTO tbl_employees (Name, Age, Country, Position, Wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Value Inserted!");
      }
    }
  );
});

// read all
app.get("/", (req, res) => {
  db.query("SELECT * FROM tbl_employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// show
app.get("/show/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM tbl_employees where Emp_id=?",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// update
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;
  console.log("server", id, name);
  db.query(
    "UPDATE tbl_employees set `Name`=?, `Age`=?, `Country`=?, `Position`=?, `Wage`=? WHERE `Emp_id`=?",
    [name, age, country, position, wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log([(name, age, country, position, wage, id)]);
        res.send("Value Updated!");
      }
    }
  );
});

// delete
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  db.query("DELETE FROM tbl_employees WHERE Emp_id=?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Value deleted!");
    }
  });
});

app.listen(3001, () => {
  console.log("Ya your server is running on port 3001");
});
