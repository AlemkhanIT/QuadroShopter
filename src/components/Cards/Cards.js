import React,{useState} from "react";
import styles from "./Cards.module.scss"

function Cards({id,imgUrl, title, price,onClickPlus,plused=false,onRemove}) {
  const [isPlus,setIsPlus]=useState(plused);
  const onPlus=()=>{
    onClickPlus({id,title,imgUrl,price});
    setIsPlus(!isPlus);
  }
  return (
    <div className={styles.card}>
          <img src={imgUrl}/>
          <h4>{title}</h4>
          <p>Cost:</p>
          <span>{price} dlr.</span>
          {plused?"":<img className={isPlus?styles.activecarted:styles.carted} onClick={onPlus} src={isPlus?"/img/active_cart.svg":"/img/nonactive_cart.svg"}/>}
    </div>
  )
}

export default Cards