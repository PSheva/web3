const PORT = process.env.PORT ?? 3000;
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/get-file-content", (req, res, next) => {
  const fileText = fs.readFileSync(`my_file.txt`, {
    encoding: "utf8",
  });
  res.json({ fileText });
  fs.writeFileSync("my_file.txt", "");
});

app.use(express.static(__dirname + "../../Static"));

app.post("/submit-form", (req, res) => {
  res.json(req.body);
  fs.writeFileSync("my_file.txt", req.body.text);
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
