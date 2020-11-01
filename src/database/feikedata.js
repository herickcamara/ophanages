

module.exports = [

    {
        id:1,
        lat:'-23.6068542',
        lng:'-46.9231096',
        name: 'Lar das meninas',
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social',
        whatsapp:'93494924932',
        images:[
           
            "https://images.unsplash.com/photo-1594007184512-2a607d1df588?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1583526362016-c3137c71cc3a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ],
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas Das 18h até 8h",
        open_on_weekends:"0"

    },   
    {
        id:2,
        lat:'-23.59946785804518',
        lng:'-46.91572923213244',
        name: 'Lar dos meninos',
        description: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social',
        images:[
           
            "https://images.unsplash.com/photo-1594007184512-2a607d1df588?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1583526362016-c3137c71cc3a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ],
        instruction:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        open_hours:"Horário de visitas Das 18h até 8h",
        open_on_weekend:"1"

    }



]


















/*



async saveorphanege(req, res) {
    const fields = req.body;

    // validaçao de todos compos preenchidos
    if (Object.values(fields).includes("")) {
      return res.send("preencha todos os campos !!");
    }

    try {
      const db = await database;
      await saveorphanege(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      // redireciona
      //return res.redirect('/location-orphanege');
    } catch (error) {
      console.log(error);
      return res.send("erro no banco de dados!!!");
    }
    //salva os dados no banco de dados!
  },*/