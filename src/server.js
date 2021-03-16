// Importando  dependências
const express = require("express");
const path = require("path");
const page = require("./page");

// Iniciando express
const server = express();

//Servidor
server
  //Ultiliza o body do req
  .use(express.urlencoded({ extended: true}))
  //Usando aquivos estático
  .use(express.static("PUBLIC"))

  //Criando  rotas para templayt
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //Criando  rotas
  .get("/", page.index)
  .get("/orphanege", page.orphanege)
  .get("/location-orphanege", page.localition)
  .get("/create-orphanege", page.craetOrphanege)
  .post("/save-orphaneges", page.saveOrphanage)



  
//Porta do servidor
server.listen(3333);
