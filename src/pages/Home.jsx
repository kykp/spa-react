import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { Categorylist } from "../components/CategoryList";
import {Preloader} from "../components/Preloader";


function Home(){
    const [catalog, setCatalog] = useState([]);

    useEffect(() => { 
        getAllCategories()
        .then(data => {
            setCatalog(data.categories)
        })
    }, [])
    
    return <>
        {!catalog.length ? <Preloader/> : (
            <Categorylist catalog={catalog}/>
        )}
    </>
}

export {Home}