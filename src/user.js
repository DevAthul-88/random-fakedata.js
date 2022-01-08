const axios = require("axios").default;

function User(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/users/random_user?size=" + count)
    .then((res) => {
      data(res.data);
    });
}

module.exports = User;
