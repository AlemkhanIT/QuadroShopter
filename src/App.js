import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import React,{useState} from "react";
import Cards from "./components/Cards/Cards";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
 function App() {
  const arr = [{
    title:"Model x400",
    price:500,
    imgUrl:"img/Quadrocopters/Hd63c3fbf386047dda6aadf5baac8d63cK-800x800.webp"
  },{
    title:"Model Alem RX500",
    price:5,
    imgUrl:"img/Quadrocopters/d00daab4-8787-419f-b292-b04fb7df6295.jpg.webp"
  }];

  
  const [isCarted, setIsCarted]=useState(false);
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
        
          {arr.map((obj)=>(
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
