const axios = require("axios").default;

function Computer(count = 1, data) {
  axios
    .get(
      "https://random-data-api.com/api/computer/random_computer?size=" + count
    )
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Computer;
