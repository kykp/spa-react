
function RecipeItem(props) {
    const {strMeal, strCategory, strArea, strInstructions, strMealThumb, strYoutube} = props;

    return <div className="myCard">
    <div className="card-image">
<img className="myCard-img" src={strMealThumb} alt={strMeal} />
<h4>{strCategory}</h4>
<p>{strArea}</p>
    </div>
<div>
<span className="myCard-span">{strInstructions.slice(0, 120)}...</span>
</div>
<div className="myCard-categoryWatch">
    {strYoutube}
</div>
</div>
}

export {RecipeItem}