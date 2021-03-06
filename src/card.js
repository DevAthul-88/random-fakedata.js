const axios = require("axios").default;

function Card(count = 1, data) {
  axios
    .get(
      "https://random-data-api.com/api/business_credit_card/random_card?size=" +
        count
    )
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Card;
