import {Link} from "react-router-dom";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.toLowerCase();
  }

function Meal (props) {
    const {strMeal, idMeal, strMealThumb} = props;

    return <div className="myCard">
           <div className="card-image">
           <Link to={`/meal/${idMeal}`}>
               <img className="myCard-img" src={strMealThumb} alt={strMeal} />
           </Link>
           <Link to={`/meal/${idMeal}`}>
               <h5>{capitalizeFirstLetter(strMeal)}...</h5>
           </Link>
           </div>
           </div>
}

export {Meal}