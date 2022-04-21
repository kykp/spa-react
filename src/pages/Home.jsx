import { useState, useEffect } from "react";
import { useSearchParams} from "react-router-dom";
import { getAllCategories } from "../api";
import { Categorylist } from "../components/CategoryList";
import {Preloader} from "../components/Preloader";
import  {Search} from "../components/Search"

function Home(){
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const itemQuery = searchParams.get("search") || "";

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => 
                item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
        setSearchParams({search: str});
    }

    useEffect(() => { 
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(itemQuery ? 
                data.categories.filter((item) => 
                    item.strCategory
                     .toLowerCase()
                     .includes(itemQuery) 
                ) : data.categories
            );
        })
    },[itemQuery])
    
    return <>
        <Search cb={handleSearch}/>
        {!catalog.length ? <Preloader/> : (
            <Categorylist catalog={filteredCatalog}/>
        )}
    </>
}

export {Home}