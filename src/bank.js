const axios = require("axios").default;

function Bank(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/bank/random_bank?size=" + count)
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Bank;
