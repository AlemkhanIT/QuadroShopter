import React from 'react'

function Header(props) {
  return (
    <header className="header">
      <div className="headerLeft">
        <img src="/img/logo.jpg" width={60} height={60}/>
        <div className="headerInfo">
          <h3>QuadroShopter!</h3>
          <p>Shop of Quadrocopters on React by AlemkhanIT!</p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={props.onClickCart} className="headerCart">
          <img src="/img/cart.svg" width={18} height={18}/>
          <span>1205 dlr.</span>
        </li>
        <li>
        <img src="/img/like.svg" width={18} height={18}/>
        </li>
        <li>
        <img src="/img/profile.svg" width={18} height={18}/>
        </li>
      </ul>
    </header>
  )
}

export default Header