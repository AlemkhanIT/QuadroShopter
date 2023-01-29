import React,{useEffect, useState} from "react";
import Cards from "./components/Cards/Cards";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
 function App() {
  const [items,setItems]=useState([]);
  const [isCarted, setIsCarted]=useState(false);
  useEffect(()=>{
    fetch('https://63d6c3a7dc3c55baf43c1957.mockapi.io/items').then((res)=>{
      return res.json();
    }).then((json)=>{
      setItems(json);
    })
  },[]);
  return (
    <div className="wrapper">
      {isCarted?<div className="overlay">
        <Drawer onClose={()=>setIsCarted(!isCarted)} />
      </div>:null}
    <Header 
      onClickCart={()=>setIsCarted(!isCarted)}
    />
    <div className="content">
      <div className="on__content">
        <h1>The All Quadrocopters</h1>
        <label className="search">
          <img src="/img/search.svg"/>
          <input className="search__input" type="text" placeholder="Search..." />
        </label>
      </div>
      <div className="items">
        
          {items.map((obj)=>(
            <Cards 
            title={obj.title}
            price={obj.price}
            imgUrl={obj.imgUrl}
            onClickPlus={()=>console.log(obj,"Добавили в корзину")}
            onClickLike={()=>console.log(obj,"Добавили в избранные")}/>
          ))}
        
      </div>
    </div>
    </div>
  );
}

export default App;
