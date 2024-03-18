const fs = require('fs');

function readFile(filePath){
    return new Promise((resolve,reject) => {
            fs.readFile(filePath,'utf-8', (err,data) => {
                if (!err){
                    resolve(JSON.parse(data));
                }else {
                    reject(err);
                }
            })
        })
}

function randomId(){
    const randomNumber = Math.round(Math.random()*100000);
    const id = randomNumber.toString().padStart(5,'0')  ;
    return id
}

async function  getIdList(userListFP,shoesListFP) {
    const shoesFile = await readFile(shoesListFP);
    const usersFile = await readFile(userListFP);
    const idList = [];
    shoesFile.forEach(shoe => {
        idList.push(shoe.id);
    })
    usersFile.forEach(user => {
        idList.push(user.id);
    })
    return idList
}

async function generateUnique(userListFP,shoesListFP){
    const idList = await getIdList(userListFP,shoesListFP);
    const id = randomId();
    if(idList.includes(id)){
        return generateUnique
    }else {
        return id ;
    }
}

//test


// async function test(path1,path2){
//     const id = await generateUnique(path1,path2)
//     console.log(id)
// }

// test('../data/users_list.json','../data/shoes_list.json')

//Exports

module.exports = {
    generateUnique,
    getIdList
}


