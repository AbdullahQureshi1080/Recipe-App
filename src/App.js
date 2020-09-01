import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const APP_ID = "72c83c9a";
  const APP_KEY = "cd6576c2293b2640f5dac213c3f10704";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    // setQuery('');
  };

  return (
    <div className="App">
      <h1 className="main-heading text-center pt-5">Welcome to Recipe Home</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search your favorite recipe"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="container">
        <div className="recipes">
          <div className="row">
            {/* <div className="col-sm-6"> */}
            {recipes.map((recipe) => (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            ))}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
