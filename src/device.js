const axios = require("axios").default;

function Device(count = 1, data) {
  axios
    .get("https://random-data-api.com/api/device/random_device?size=" + count)
    .then((res) => {
      data(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = Device;
