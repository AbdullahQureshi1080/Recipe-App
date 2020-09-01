import React, {useState} from "react";
import style from "./recipe.module.css";
import "bootstrap/dist/css/bootstrap.css";





const Recipe = (props) => {
  const [recipeDetail,setRecipeDetail] = useState('d-none');
  const changeClass = () =>{
    if(recipeDetail === "d-none"){
      setRecipeDetail("d-show");
    }
    else{
      setRecipeDetail("d-none");
    }
  }

  return (
    <div className="col-sm-6">
      <div className={`${style.card} card mt-5`}>
        <img
          className={`${style.image} card-img-top`}
          src={props.image}
          alt=""
        ></img>
        <div className="card-body">
          <h3 className="card-title text-center">{props.title}</h3>
          <div className = "d-flex justify-content-center">
          <button className={`${style.button} btn btn-lg font-weight-bold rounded mb-2`} onClick={changeClass}>Recipe</button>
          </div>
          <p className={`${recipeDetail} ${style.text} card-text`}>
            {props.ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </p>
          <div className="d-flex justify-content-center">
          <p className = "card-text text-sm font-weight-bold">Calories</p>
          <p className="card-text text-sm ml-2">{Math.round(props.calories)}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Recipe;
