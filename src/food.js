const axios = require("axios").default;

function Food(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/food/random_food?size=" + count)
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Food;
