const express = require("express");
const bodyParser = require("body-parser");
const EmployeeRouter = require("./routes/employeesRoutes");
const app = express();
const mongoose = require("mongoose");
// importation du cors 
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// implementation du cors 
app.use(cors());
app.use("/employees", EmployeeRouter);

mongoose
  .connect(
    "mongodb+srv://hichem:hichem123@cluster0.p4yzy21.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("base de donnes connecté");
  });

app.listen(5000, () => console.log("serveur en marche"));
