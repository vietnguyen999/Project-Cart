import React from "react";
import Product from "../../Product/Product";
import useFetch from "../../../hooks/useFetch";
function RelatedProduct({ productId, categoryId }) {
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );
  return (
    <div className="related-producxt">
      <Product headingText="Related Product" products={data} />
    </div>
  );
}

export default RelatedProduct;
