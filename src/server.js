// importa um dependencia
const express = require("express");
const path = require("path");
const page = require("./page");

// iniciando express
const server = express();

//servidor
server
  //utiliza o body do req
  .use(express.urlencoded({ extended: true}))
  //usando aquivos estatico
  .use(express.static("PUBLIC"))

  //cria uma rota para templayt
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //criar uma rota
  .get("/", page.index)
  .get("/orphanege", page.orphanege)
  .get("/location-orphanege", page.localition)
  .get("/create-orphanege", page.craetOrphanege)
  .post("/save-orphaneges", page.saveOrphanage)



  
//ligar o servido
server.listen(3333);
