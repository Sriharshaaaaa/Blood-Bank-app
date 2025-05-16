const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");

//dot config
dotenv.config();

//express rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//sample route
app.use("/api/v1/test", require("./routes/testRoutes"));

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server is running In ${process.env.DEV_MODE} Mode on Port ${process.env.PORT}`
      .bgBlue.white
  );
});
