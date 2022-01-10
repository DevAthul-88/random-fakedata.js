const axios = require("axios").default;

function Company(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/company/random_company?size=" + count)
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Company;
