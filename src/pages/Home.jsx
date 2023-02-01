import React from 'react';
import Cards from "../components/Cards/Cards";

function Home({items,search,setSearch,onChangeSearch, onAddToCart}) {
  return (
    <div className="content">
      <div className="on__content">
        <h1>{search?`Search on: "${search}"`:"The All Quadrocopters"}</h1>
        <label className="search">
          <img src="/img/search.svg"/>
          <input onChange={onChangeSearch} className="search__input" type="text" placeholder="Search..." />
        </label>
      </div>
      
      <div className="items">
          {items.filter((item)=>item.title.toLowerCase().includes(search)).map((item,index)=>(
            <Cards 
            key={index}
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            onClickPlus={(obj)=>onAddToCart(obj)}
            />
          ))}
      </div>
    </div>
  )
}

export default Home