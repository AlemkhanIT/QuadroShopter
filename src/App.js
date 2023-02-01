import React,{useEffect, useState} from "react";
import {Route} from 'react-router-dom';
import axios from "axios";
import Home from "./pages/Home";
import Purchases from "./pages/Purchases";
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

  
  const onAddToCart = async (obj) =>{  
    try{
      const {data} = await axios.post('https://63d6c3a7dc3c55baf43c1957.mockapi.io/cart', obj)
      setItemsCart(prev=>[...prev,data]);} catch (error){
        alert("Canted add to cart")
      }   
      
    
  }
  const onRemoveItem = (id) =>{
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
    <Header onClickCart={()=>setIsCarted(!isCarted)}/>
      <Route path="/" exact>
        <Home
          items={items}
          search={search}
          setSearch={setSearch}
          onChangeSearch={onChangeSearch}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route path="/purchases">
        <Purchases items={itemsCart} onAddToCart={onAddToCart}/>
      </Route>
    </div>
  );
}

export default App;
