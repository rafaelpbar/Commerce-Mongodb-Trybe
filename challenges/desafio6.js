db.produtos.update(
  {"nome": {$in: ["Big Mac", "Quarteirão com Queijo"]}},
  {$addToSet: {"ingredientes": "bacon"}}
);

db.produtos.find( {}, { "_id": false, "nome": true, "ingredientes": true } );
