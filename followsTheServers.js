const express = require("express");
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.post("/call_to_server", function (req, res) {
  console.log(req.body);
  res.send("ok")
});

app.listen(80);