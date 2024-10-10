const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:process.env.WORD,
    database:"shop"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    const sqlinsert = "INSERT INTO first_test_table (name, email) VALUES('JHON2', 'jhon2@email.com')";
    db.query(sqlinsert, (err, result) => {
        console.log("error", err);
        console.log("result", result);
        res.send("Hello Express");
    })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})
