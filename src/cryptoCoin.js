const axios = require("axios").default;

function crypto_coin(count = 1, data) {
  axios
    .get(
      "https://random-data-api.com/api/crypto_coin/random_crypto_coin?size=" +
        count
    )
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = crypto_coin;
