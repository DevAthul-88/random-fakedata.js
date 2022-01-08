const axios = require("axios").default;

 function Address(count = 1 , data) {

  axios.get("https://random-data-api.com/api/address/random_address?size="+count).then((res) => {
      data(res.data)
  })
  
   
}

module.exports = Address;
