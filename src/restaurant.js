const axios = require("axios").default;

function Restaurant(count = 1, data) {
  axios
    .get(
      "https://random-data-api.com/api/restaurant/random_restaurant?size=" +
        count
    )
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Restaurant;
