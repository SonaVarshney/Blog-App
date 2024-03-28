import express from "express";
import dotenv from "dotenv";
import expressLayout from "express-ejs-layouts";

import mainRoute from "./server/routes/main.js";

const app = express(); //this creates express app or server
dotenv.config();

const PORT = 5000 || process.env.PORT;

app.use(express.static("public"));

//Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engines", "ejs");

app.use("/main", mainRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
