import React from 'react'
import styles from "./Cards.module.scss"

function Cards(props) {
    const onClickPlus = (a,b)=>{
        alert(a+b)
    }
  return (
    <div className={styles.card}>
          <img src={props.imgUrl}/>
          <h4>{props.title}</h4>
          <p>Cost:</p>
          <span>{props.price} dlr.</span>
          <button className={styles.liked} onClick={()=>onClickPlus(5,7)}><img src="/img/nonactive_like.svg"/></button>
          <button className={styles.carted} onClick={props.onClick}><img src="/img/nonactive_cart.svg"/></button>
    </div>
  )
}

export default Cards