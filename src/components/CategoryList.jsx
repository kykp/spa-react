import {CategoryItem} from "./CategoryItem";

function Categorylist({ catalog = [] }) {
  return <div className="list">{catalog.map((el) => (
    <CategoryItem key={el.idCategory} {...el}/>
  ))}</div>;
}

export { Categorylist };
