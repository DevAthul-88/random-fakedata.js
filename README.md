##  random-data.js

> A package to generate random data

 ### A package to generate random data

    npm install --save ranodm-data
### Usage

  ```javascript
const user  = require('random-data/src/user')

user(1 , (data) => {
  console.log(data) // get a random user data
})
```
### Get a random address
```javascript
const address = require('random-data/src/address')

address(1 , (data) => {
  console.log(data) // get a random address
})
```
### Data return count
###### Default data count is 1. If you want more than 1 return data use like this
```javascript
const color = require('random-data/src/color')

color(4 , (data) => {  // the first number parameter representing how much data should return
   console.log(data)
})

```
### Available random data's

1. Address
1. App
1. Appliance
1. Bank
1. Beer
1. Card
1. Code
1. Color
1. Commerce
1. Company
1. Computer
1. Crypto Coin
1. Device
1. Food
1. Internet Stuff
1. Lorem Filcker
1. Lorem Ipsum
1. Nation
1. Phone Number
1. Stripe
1. User
1. Vehicle
