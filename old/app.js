const express = require ("express");
const app = express();
const path = require ("path");
const port = 3030; 


app.get('/', (req, res) => {res.sendFile(path.join(__dirname, "views", "index.html"));});
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, "views", "register.html")));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")));
app.get('/carrito', (req, res) => {res.sendFile(path.join(__dirname, "views", "carrito.html"));});
app.get('/productDetail', (req, res) => {res.sendFile(path.join(__dirname, "views", "productDetail.html"));});


app.listen (port, () => console.log("Servidor corriendo en puerto " + port));

   
app.use(express.static("public"));  