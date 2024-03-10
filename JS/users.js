const readData = require('./read_data');

//info obj

const testReqObj = {
    username: "abdelrahim houbi",
    filePath: "../data/users_list.json",
  }
  

async function test(){
  const data = await readData.userData(testReqObj);
  console.log(data)
}

test()