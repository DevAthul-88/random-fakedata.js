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
