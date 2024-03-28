import express from "express";
import dotenv from "dotenv";
import expressLayout from "express-ejs-layouts";

const app = express(); //this creates express app or server
dotenv.config();

const PORT = 5000 || process.env.PORT;

//Templating Engine

app.get("", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
