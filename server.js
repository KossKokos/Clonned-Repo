const express = require("express");
const port = process.env.PORT || 3000;
const fs = require("fs");
const app = express();
const path = require("path");
app.use(express.json());
const apiRouter = require("./route/apiRoute");

app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, "public")));

app.get('/',async (req,res) =>{
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

app.get('/developer',async (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'developer_mode.html'))
});

app.get('/login',async (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'sign_up.html'))
});

app.get('/sign_up',async (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'))
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`The IT_9 project Server has started on port:${port}`);
});

