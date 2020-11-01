const Database = require('./database/db');
const saveOrphanage = require('./database/salve');

module.exports = {
  index(req, res) {
    
    // console.log(path.join(__dirname, 'views', 'index.html'))
    return res.render("index");
  },

 
  

  async orphanege(req, res) {
    const id=req.query.id
    
    try {

      const db = await Database;
      const resutado = await db.all(`SELECT * FROM orphaneges  WHERE id = "${id}"`)
      const orphanege = resutado[0]
      orphanege.images = orphanege.images.split(",")
      orphanege.firstImage = orphanege.images[0]

      //orphanege.open_on_weekends != "0" ? true : false
     
      if(orphanege.open_on_weekends == "0"){
        orphanege.open_on_weekends =false;
      }else{
        orphanege.open_on_weekends =true;
      }
      
      return res.render('orphanege', {orphanege});
    } catch (error) {
      console.log(error)
      return res.send('erro no banco de dados!!')
    }
  },



  async localition(req, res) {
    try{
      const db = await Database;
      const orphanege = await db.all("SELECT * FROM orphaneges  ");
    return await res.render("location-orphanege", {orphanege});
    }catch(error){
      console.log(error)
      return res.send("error no banco de dados!")
    }

    
  },

  craetOrphanege(req, res) {
    return res.render("create-orphanege");

  },


  async saveOrphanage(req, res){
    const fields = req.body
    const db = await Database
    
    if (Object.values(fields).includes("")) {

      return res.send("preencha todos os campos !!")
    }
    
    try {
        await saveOrphanage( db,{
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends
      })

      // redireciona
      return res.redirect("location-orphanege");
    } catch (error) {
      console.log(error);
      return res.send("erro no banco de dados!!!");
    }
  },



 
}
