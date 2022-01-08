const axios = require("axios").default;

 function Appliance(count = 1 , data) {

  axios.get("https://random-data-api.com/api/bank/random_bank?size="+count).then((res) => {
      data(res.data)
  })
  
   
}

module.exports = Appliance;