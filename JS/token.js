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

async function checkToken(path,token){
    const  data = JSON.parse( await getTokenList(path));
    let exist = false;
    data.forEach(obj => {
        if(obj.token === token){
            exist = true ;
            return obj.username
        }
    });
    if(!exist){
        console.log('token not found')
    }
}

async function createCookie(path){
    const tokenData = JSON.parse(await getTokenList(path))
    const tokenList = [];
    tokenData.foreach(cookie => {
        tokenList.push(cookie.token)
    })
    console.log(tokenList);
}

createCookie('../data/cookies.json')

// checkToken('../data/token_list.json','49zz92eqy92643v827ha490d')

 module.exports = {
    checkToken,

 }