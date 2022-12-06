const addDays = require("date-fns/addDays");

const express = require("express");
const app = express();
app.get("/", (request, response) => {
  let date = new Date();
  let values = addDays(date, 100);
  //console.log(values.getFullYear());
  response.send(
    `${values.getDate()}-${values.getMonth() + 1}-${values.getFullYear()}`
  );
});
app.listen(3000);
module.exports = app;
