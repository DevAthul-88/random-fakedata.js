const axios = require("axios").default;

function internetStuff(count = 1, data) {
  axios
    .get(
      "https://random-data-api.com/api/internet_stuff/random_internet_stuff?size=" +
        count
    )
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = internetStuff;
