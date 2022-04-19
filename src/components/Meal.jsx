import {Link} from "react-router-dom";

function Meal (props) {
    const {strMeal, idMeal, strMealThumb} = props;

    return <div className="myCard">
        
    <div className="card-image">
    
        <img className="myCard-img" src={strMealThumb} alt={strMeal} />
        <h4>{strMeal}</h4>
    </div>
<div>
</div>
<div className="myCard-categoryWatch">
<Link to={`/meal/${idMeal}`}> Watch recipe</Link>
</div>
</div>

}

export {Meal}