const axios = require("axios").default;

function App(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/app/random_app?size=" + count)
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = App;
