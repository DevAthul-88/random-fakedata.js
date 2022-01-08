const axios = require("axios").default;

function Code(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/code/random_code?size=" + count)
    .then((res) => {
      data(res.data);
    });
}

module.exports = Code;
