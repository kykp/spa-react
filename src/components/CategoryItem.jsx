import { Link } from "react-router-dom";

function CategoryItem(props) {
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props;

    return <div className="myCard">
        
            <div className="card-image">
            
            <Link to={`/category/${strCategory}`}><img className="myCard-img" src={strCategoryThumb} alt={idCategory} /></Link>
                <Link to={`/category/${strCategory}`}><h4>{strCategory}</h4></Link>
            </div>
        <div>
        <span className="myCard-span">{strCategoryDescription.slice(0, 120)}...</span>
        </div>
        <div className="myCard-categoryWatch">
        {/* <Link to={`/category/${strCategory}`}> Watch category</Link> */}
        </div>
       </div>
  }
  
  export { CategoryItem };
  