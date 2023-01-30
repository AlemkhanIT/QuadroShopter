import React,{useEffect, useState} from "react";
import Cards from "./components/Cards/Cards";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
 function App() {
  const [items,setItems]=useState([]);
  const [itemsCart,setItemsCart]=useState([]);
  const [isCarted, setIsCarted]=useState(false);
  const [search,setSearch] = useState('');
  useEffect(()=>{
    axios.get('https://63d6c3a7dc3c55baf43c1957.mockapi.io/items').then((res)=>{
      setItems(res.data)
    })
    axios.get('https://63d6c3a7dc3c55baf43c1957.mockapi.io/cart').then((res)=>{
      setItemsCart(res.data)
    })
  },[]);

  const onAddToLike = (obj) =>{
    console.log(obj)
  }
  const onAddToCart = (obj) =>{
    axios.post('https://63d6c3a7dc3c55baf43c1957.mockapi.io/cart', obj)
    setItemsCart(prev=>[...prev,obj]);
  }
  const onRemoveItem = (id) =>{
    console.log(id)
    axios.delete(`https://63d6c3a7dc3c55baf43c1957.mockapi.io/cart/${id}`)
    setItemsCart(prev=>prev.filter(item=>item.id!==id));
  }
  const onChangeSearch = (event) =>{
    setSearch(event.target.value)
  }
  
  return (
    <div className="wrapper">
      {isCarted?<div className="overlay">
        <Drawer items={itemsCart} onClose={()=>setIsCarted(!isCarted)} onRemove={onRemoveItem}/>
      </div>:null}
    <Header 
      onClickCart={()=>setIsCarted(!isCarted)}
    />
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
            onClickLike={(obj)=>onAddToLike(obj)}/>
          ))}
        
      </div>
    </div>
    </div>
  );
}

export default App;
