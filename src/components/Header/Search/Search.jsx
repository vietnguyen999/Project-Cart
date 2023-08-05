import React from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import Newsletter from "../../Footer/Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
function Search({ setshowSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );
  if(!query.length){
    data = null;
  }
  console.log(data)
  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for products"
          value={query}
          onChange={onChange}
        />
        <MdClose onClick={() => setshowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-result">
          {data?.data?.map((item) => (
            <div key={item.id} className="search-results-item" onClick={() =>{
              navigate("/product/" + item.id);
              setshowSearch(false);
            }}>
            <div className="img-container">
              <img src={process.env.REACT_APP_DEV_URL +
                item.attributes.img?.data[0].attributes?.url} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">{item.attributes.title}</span>
              <span className="desc">{item.attributes.desc} </span>
            </div>
          </div>
          ))} 
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Search;
