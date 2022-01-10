const axios = require("axios").default;

function phoneNumber(count = 1, data) {
  axios
    .get(
      "https://random-data-api.com/api/phone_number/random_phone_number?size=" +
        count
    )
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = phoneNumber;
