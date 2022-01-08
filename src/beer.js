const axios = require("axios").default;

function Beer(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/beer/random_beer?size=" + count)
    .then((res) => {
      data(res.data);
    });
}

module.exports = Beer;
