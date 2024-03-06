const fs = require('fs');
const { resolve } = require('path');


function readFile(){
    return new Promise((resolve,reject) => {
            fs.readFile('./quotes.json','utf-8', (err,data) => {
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

async function  main() {
    const idList = [];
    const data = await readFile();
    data.forEach(element => {
        let id = randomId();
        console.log(id);
        if(idList.includes(id)){
            id = randomId();
            console.log('same id was found')
        }else {
            element['Id'] = id;
            idList.push(id);
        }
    });
    console.log(data);
    console.log(idList);
    fs.writeFile('./quotes.json',JSON.stringify(data,null,2),(err) => {
        if(err){
            console.log(err);
        }else {
            console.log('file saved')
        }
    });
}
main();
