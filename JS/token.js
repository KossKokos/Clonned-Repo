const fs = require('fs');


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNum(){
    let number = String.fromCharCode(generateRandomNumber(48,57));
    return number
}

function getRandomChar(){
    let char = String.fromCharCode(generateRandomNumber(97,122));
    return char
}

function randomChr(){
    const random = Math.random();

    if(random < 0.5){
        return getRandomNum();
    }else {
        return getRandomChar();
    }
}

function generateToken(length = 25){
    const tokenArr = [];
    for(i = 1;i < length; i++){
        tokenArr.push(randomChr());
    }
    const token = tokenArr.join('');
    console.log(token);
    return token;
}

function getTokenList(path){
    return new Promise((resole,reject) => {
        fs.readFile(path,'utf-8',(error,data) => {
            if(error){
                reject(error)
            }else {
                resole(data)
            }
        })
    })
}

async function checkToken(path){
    const  data = JSON.parse( await getTokenList(path));
    console.log(data)
}

checkToken('../data/token_list.json')

 module.exports = generateToken;