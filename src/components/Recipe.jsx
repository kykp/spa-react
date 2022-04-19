import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { Preloader } from "./Preloader";
import {getMealById} from "../api";
import {RecipeList} from "./RecipeList"

function Recipe () {
    const {str} = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        getMealById(str).then(data => {
            setRecipe(data.meals)
        })
    }, [str])

    return <>
    {!recipe.length ? <Preloader/> : <RecipeList recipe={recipe}/>}
    </>
}

export {Recipe}