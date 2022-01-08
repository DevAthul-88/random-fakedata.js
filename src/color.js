const axios = require("axios").default;

function Color(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/color/random_color?size=" + count)
    .then((res) => {
      data(res.data);
    });
}

module.exports = Color;
