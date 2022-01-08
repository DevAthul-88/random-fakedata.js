const axios = require("axios").default;

function loremIpsum(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum?size=" + count)
    .then((res) => {
      data(res.data);
    });
}

module.exports = loremIpsum;