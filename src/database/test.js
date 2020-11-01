const database = require("./db");
const saveorphanege = require("./salve");
database.then(async db => {
   await saveorphanege(db, {
    lat: "--23.6068542",
    lng: "-46.9231096",
    name: "Lar dos meninos",
    about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp: "99349320394",
    images: [
      "https://images.unsplash.com/photo-1594007184512-2a607d1df588?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1583526362016-c3137c71cc3a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(), //tostring transforma um awy en string
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "1",
  });

 const orphanege = await db.all("SELECT * FROM orphaneges  ");
 console.log(orphanege);
});
