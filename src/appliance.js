const axios = require("axios").default;

function Appliance(count = 1, data) {
  axios
    .get(
      "https://random-data-api.com/api/appliance/random_appliance?size=" + count
    )
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Appliance;
