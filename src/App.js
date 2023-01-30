import React,{useEffect, useState} from "react";
import Cards from "./components/Cards/Cards";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
 function App() {
  const [items,setItems]=useState([]);
  const [itemsCart,setItemsCart]=useState([]);
  const [isCarted, setIsCarted]=useState(false);
  useEffect(()=>{
    fetch('https://63d6c3a7dc3c55baf43c1957.mockapi.io/items').then((res)=>{
      return res.json();
    }).then((json)=>{
      setItems(json);
    })
  },[]);

  const onAddToLike = (obj) =>{
    console.log(obj)
  }
  const onAddToCart = (obj) =>{
    setItemsCart(prev=>[...prev,obj]);
  }
  
  
  return (
    <div className="wrapper">
      {isCarted?<div className="overlay">
        <Drawer items={itemsCart} onClose={()=>setIsCarted(!isCarted)} />
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
        
          {items.map((item)=>(
            <Cards 
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            onClickPlus={(obj)=>onAddToCart(obj)}
            onClickLike={(obj)=>onAddToLike(obj)}/>
          ))}
        
      </div>
    </div>
    </div>
  );
}

export default App;
