const axios = require("axios").default;

function Name(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/name/random_name?size=" + count)
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Name;



