const express = require("express");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const { User } = require("./models");
const userController = require("./controllers/user-controller");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Best-social-Network"
  //   {
  //     useFindAndModify: false,
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   }
);

mongoose.set("debug", true);

app.listen(PORT, () => console.log(`Server live! On localhost ${PORT}`));


// Unfortinuatly I can only get the server up and live right now... I will continue working on this and hopefully have the routes connected soon. Just wanted to turn SOMETHING in.