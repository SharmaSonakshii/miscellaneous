    const express = require("express");
    const app = express();

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    app.get("/register" , (req,res)=>{
        const {username , password} = req.query;
        console.log(req.query); 
        res.send(`its a get request welcome ${username} and your password is ${password}`);
    
    });
                                       
    app.post("/register" , (req,res)=>{
        const {username , password} = req.body;
        console.log(req.body); 
        res.send(`its a post request welcome ${username}`)
    })

    let port = 8080;
    app.listen (port , ()=>{
        console.log(`listening on ${port}`)
    })