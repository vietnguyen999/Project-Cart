import {useParams} from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import './Categorys.scss';
import Product from '../Product/Product'
function Category() {

  const {id} = useParams();

  const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
        <Product innerPage={true} products={data}/>
      </div>
    </div>
  )
}

export default Category