import {useEffect, useState} from "react"
import { useParams, useNavigate } from "react-router-dom";
import { Preloader } from "../components/Preloader";
import {getMealById} from "../api";

 
function Recipe () {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    

    useEffect(() => {
        getMealById(id).then(data => {
            setRecipe(data.meals[0])
        })
    }, [id])

    const youtubeURL = (url) => {
        const newUrl = url.substring(url.indexOf("=") +1);
        return newUrl
    }
    
    return <>
        {!recipe.idMeal 
             ? <Preloader/> 
             : <div>
                    <div className="recipe-top">
                        <img className="myCard-img" src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <h1>{recipe.strMeal}</h1>
                        <p>{recipe.strInstructions}</p>
                    </div>
               
                <div className="recipe-video">
                <table className="recipe-table">
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(recipe).map(key => {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    )
                                }
                                return null;
                            })
                        }
                    </tbody>
                </table>

                {recipe.strYoutube ? 
                <iframe className="recipe-iframe" frameBorder="0" allowFullScreen 
                title={recipe.strMeal} 
                src={`https://www.youtube.com/embed/${youtubeURL(recipe.strYoutube)}`}/> 
                :null}
                </div>
               
                </div>
        }
        <button className="goBack-recipe" onClick={goBack}>Go Back</button>
           </>
}

export {Recipe}