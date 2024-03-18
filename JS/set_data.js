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

async function createUser(){
    
}