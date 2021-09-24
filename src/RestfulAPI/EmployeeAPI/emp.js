const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config({ path: "./config/keys.env" });

const employeeRouters = require("./routers/employees");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/employees", employeeRouters);

app.listen(process.env.EMP_PORT, () => {
  console.log(`Employee API running on ${process.env.EMP_PORT}`);
});
