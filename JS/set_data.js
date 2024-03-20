const fs = require('fs');

//Users file

function getUsersFile(userListFP) {
    return new Promise((resolve, reject) => {
      fs.readFile(userListFP, "utf-8", (err, data) => {
        if (err) {
          reject(`Error: ${err}`);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  }

async function createUser(userData,filePath){
    const usersFile = await getUsersFile(filePath);
    usersFile.push(userData);
    fs.writeFile(filePath, JSON.stringify(usersFile,null,2), 'utf-8', (err) => {
        if (err) {
            console.log("There was an error writing the file: ",err);
        } else{
            console.log(`A user was added to the list`);
        }
    }); 
}

async function saveUserData(userData,filePath){
    const usersFile = await getUsersFile(filePath);
    usersFile.forEach((user,i) => {
        if(user.username === userData.username){
            usersFile[i] = userData;
        }
    })
    fs.writeFile(filePath, JSON.stringify(usersFile,null,2), 'utf-8', (err) => {
        if (err) {
            console.log("There was an error writing the file: ",err);
        } else{
            console.log(`A user was added to the list`);
        }
    }); 
    return usersFile
}

//Test 

// async function test(userData,filePath) {
//     const userFile = await saveUserData(userData,filePath);
//     console.log(userFile)
// }

// const user = {
//     username: "ironman",
//     password: "polo",
//     id: "16695",
//     cart: "",
//     userType: "client",
//     pfpPath: "ubjk,nkjm"
//   }

//   test(user,'../data/users_list.json')

//Exports =>> 

module.exports = {
    createUser,
    saveUserData
}