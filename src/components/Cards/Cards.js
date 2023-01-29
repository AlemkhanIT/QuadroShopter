import React,{useState} from "react";
import styles from "./Cards.module.scss"

function Cards(props) {
  const [isLike,setIsLike]=useState(false);
  const [isPlus,setIsPlus]=useState(false);
  const onLike=()=>{
    setIsLike(!isLike);
  }
  const onPlus=()=>{
    setIsPlus(!isPlus);
  }
  return (
    <div className={styles.card}>
          <img src={props.imgUrl}/>
          <h4>{props.title}</h4>
          <p>Cost:</p>
          <span>{props.price} dlr.</span>
          <img className={isLike?styles.activeliked:styles.liked} onClick={onLike} src={isLike?"img/active_like.svg":"img/nonactive_like.svg"}/>
          <img className={isPlus?styles.activecarted:styles.carted} onClick={onPlus} src={isPlus?"/img/active_cart.svg":"/img/nonactive_cart.svg"}/>
    </div>
  )
}

export default Cards