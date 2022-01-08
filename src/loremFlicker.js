const axios = require("axios").default;

function loremFlicker(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/lorem_flickr/random_lorem_flickr?size=" + count)
    .then((res) => {
      data(res.data);
    });
}

module.exports = loremFlicker;