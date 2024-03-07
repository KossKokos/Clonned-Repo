const readData = require('./read_data');

//info obj

const testReqObj = {
    username: "bob",
    filePath: "../data/users_list.json",
  }
  

readData('../data/shoes_list.json',testReqObj)