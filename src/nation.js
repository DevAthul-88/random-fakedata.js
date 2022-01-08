const axios = require("axios").default;

function Nation(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/nation/random_nation?size=" + count)
    .then((res) => {
      data(res.data);
    });
}

module.exports = Nation;