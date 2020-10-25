const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-23.5620284",
    lng: "-46.6555858",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e /ou vulnerabilidade social.",
    whatsapp: "11987344823",
    images: [
      "https://images.unsplash.com/photo-1448301566816-a036b4240d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1533222535026-754c501569dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1460788150444-d9dc07fa9dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas das 18h até 8h",
    open_on_weekends: "0",
  });
  // consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);
  // consultar somente 1 orphanato, pelo id
  // const orphanage = await db.all('SELECT * FROM orphanages where id = "2"';
  // console.log(orphanage);
  //deletar dado da tabela
  //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
  //console.log(await db.run("DELETE FROM orphanages"));
  //console.log(await db.run("SELECT * FROM orphanages"));
});
