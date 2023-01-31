import React,{useState} from "react";
import styles from "./Cards.module.scss"

function Cards({imgUrl, title, price,onClickPlus,onClickLike}) {
  const [isPlus,setIsPlus]=useState(false);
  const onPlus=()=>{
    onClickPlus({title,imgUrl,price});
    setIsPlus(!isPlus);
  }
  return (
    <div className={styles.card}>
          <img src={imgUrl}/>
          <h4>{title}</h4>
          <p>Cost:</p>
          <span>{price} dlr.</span>
          <img className={isPlus?styles.activecarted:styles.carted} onClick={onPlus} src={isPlus?"/img/active_cart.svg":"/img/nonactive_cart.svg"}/>
    </div>
  )
}

export default Cards