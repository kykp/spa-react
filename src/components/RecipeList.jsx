import {RecipeItem} from "./RecipeItem"

function RecipeList({recipe = []}) {
<div className="list">{recipe.map((el) => (
    <RecipeItem key={el.idMeal} {...el}/>
  ))}</div>;

}

export {RecipeList}