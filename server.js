const express = require("express");
const cors = require("cors");
const app = express();
const url = `https://api.thecatapi.com/v1/images/search`;
const api_key =
  "live_lgH6Pqr7HepCFRhK0poMONL9nKKSxc43j2o6jdOkZpYD2R65KPNfMTMIDcTMFBQO";
app.use(cors());

app.post("/", (req, res) => {
  fetch(url, {
    headers: {
      "x-api-key": api_key,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data[0].url;
    })
    .then((img) => {
      res.json({ message: img });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
