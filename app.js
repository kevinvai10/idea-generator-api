const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const knex = require("knex");
const cors = require("cors");
const register = require("./src/controllers/register");
const signin = require("./src/controllers/signin");

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  },
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

//------------------------------------------------------------------
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});
app.post("/signin", signin.handleSignin(db, bcrypt));

app.listen(process.env.PORT || 3001, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
