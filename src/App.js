import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {

  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

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
    
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  
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
      <div className="container pb-5">
        <div className="recipes">
          <div className="row">
            {recipes.map((recipe) => (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            ))}
 
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
