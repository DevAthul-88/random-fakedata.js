const axios = require("axios").default;

function Card(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/stripe/random_stripe?size=" + count)
    .then((res) => {
      data(res.data);
    });
}

module.exports = Card;
