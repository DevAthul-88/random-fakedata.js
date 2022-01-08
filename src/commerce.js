const axios = require("axios").default;

function Commerce(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/commerce/random_commerce?size=" + count)
    .then((res) => {
      data(res.data);
    });
}

module.exports = Commerce;
