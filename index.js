import express from 'express';
import Database from './config/Database.js';
import Pokemon from './Model/Pokemon.js';

Database.connect();

const app = express();
//setting view engine to ejs
app.set("view engine", "ejs");

//route for index page
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/pokemon", async function (req, res) {
  const filter = {};
  let pokemons = await Pokemon.find(filter);
  console.log(pokemons);
  const titre = 'Mon Pokédex';

  res.render("pokemon", {
    pokemons: pokemons,
    title: titre
  });
});

app.get("/pokemon/create", async function (req, res) {
  const filter = {};
  let pokemons = await Pokemon.find(filter);
  console.log(pokemons);
  const titre = 'Mon Pokédex';

  res.render("create", {
    pokemons: pokemons,
    title: titre
  });
});

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});