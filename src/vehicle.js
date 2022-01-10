const axios = require("axios").default;

function Vehicle(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/vehicle/random_vehicle?size=" + count)
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Vehicle;
