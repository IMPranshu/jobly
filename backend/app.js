const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

//database connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// port for the application
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
