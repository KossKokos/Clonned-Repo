const express = require('express');
const fs = require('fs');
const router = express.Router();
const dataFunction = require('../JS/read_data.js');
const user = require('../JS/users.js');
const path = require('path')

//Check user function

async function checkUser(list,username,password) {
    let userExist = false;
    let correctPassword = false;
    list.forEach((userAccount) => {
        if (userAccount.username === username) {
            userExist = true;
            password === userAccount.password ? correctPassword = true: '';
        }
    });
    return {
        userExist,
        correctPassword,
    }
}

//load quotes

router.get('/load_quote',async (req,res) =>{
    try {
    const data = await dataFunction('./data/quotes.json','./data/authors.json');
    const response = JSON.stringify(data);
    res.json(response);
    }catch (error){
        console.error(error);
        res.status(500).json({error: 'internal server error'});
    }
})

// register
router.post('/register',async (req, res) => {
    const {username , password} = await req.body;
    const usersList = await  user.getUsersList("./data/users_list.json"); 
    let userExist = false;
    usersList.forEach(userAccount => {
    
        userAccount.username === username ? userExist = true: false;

    });
    if (userExist === false) {
        user.addUser("./data/users_list.json",username,password);
        res.json(JSON.stringify(true));
    }else {
        res.json(JSON.stringify(false));
    }
});

// login
router.post('/login',async (req, res) => {
    const {username , password} = await req.body;
    const usersList = await  user.getUsersList("./data/users_list.json"); 
    const form = await checkUser(usersList,username,password);
    if(form.correctPassword === true &&form.userExist == true) {
        const userData = await user.findUser(username,'./data/users_list.json');
        delete userData.password;
        console.log(userData);
        res.json(JSON.stringify({form,userData}))
    }else {
        const userData = null;
        res.json(JSON.stringify({form,userData}));
    }
});

router.post('/login/save_user_data',async (req, res) => {
   const data = await req.body;
   console.log(data);
   res.json(JSON.stringify({message: 'Data was saved'}));
});


module.exports = router;  















