var express = require("express");

var app = express();
var port = 2020;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
