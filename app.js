import loginRoutes from "./src/routes/login";
import registerRoutes from "./src/routes/register";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

//------------------------------------------------------------------
app.use("/login", loginRoutes);
app.post("/register", registerRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
