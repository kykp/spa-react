import {Link} from "react-router-dom";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.toLowerCase();
  }

function Meal (props) {
    const {strMeal, idMeal, strMealThumb} = props;

    return <div className="myCard">
        
    <div className="card-image">
    
        <img className="myCard-img" src={strMealThumb} alt={strMeal} />
        <h5>{capitalizeFirstLetter(strMeal)}...</h5>
    </div>
<div>
</div>
<div className="myCard-categoryWatch">
<Link to={`/meal/${idMeal}`}> Watch recipe</Link>
</div>
</div>

}

export {Meal}