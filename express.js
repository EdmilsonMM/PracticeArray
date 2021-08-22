const express = require("express");
const app = express();

//CreandoServidor
app.listen(5000, () => {
    console.log("Servidor port 5000");
});

app.get('/admi' , (req,res) => {
    res.send("Hola");
});
app.get('/index' , (req,res) => {
    res.send("Hola");
});
app.get('/Users' , (req,res) => {
    res.send("Hola");
});

app.get('/login', (req,res)=>{
    res.send("<h1>Bienvenido</h1>")
})


