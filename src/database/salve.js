function sevedados(db, orphanege){
  return  db.run(`
    INSERT INTO orphaneges(
        lat,
        lng,
        name,
        about, 
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
   )VALUES(
    "${orphanege.lat}",
    "${orphanege.lng}",
    "${orphanege.name}",
    "${orphanege.about}",
    "${orphanege.whatsapp}",
    "${orphanege.images}",
    "${orphanege.instructions}",
    "${orphanege.opening_hours}",
    "${orphanege.open_on_weekends}"
   );
   
`)
}

module.exports = sevedados;