import React from 'react'

function Drawer({onClose, items=[]}) {
  
  return (
    <div className="drawer">
          <div className="drawer__top"><h3>Cart</h3> <div onClick={onClose} className='button-close'><img src="/img/nonactive_cart.svg"/></div></div>
          <div className="drawer__cost">
          <div className="drawer__items">
            {items.map((item)=>(
              <div className="drawer__card">
              <img src={item.imgUrl}/>
              <div className="drawer__info">
                <p>{item.title}</p>
                <span>{item.price} dlr.</span>
              </div>
              <button><img src="/img/nonactive_cart.svg"/></button>
            </div>
            ))}
            
            
          </div>
          <div className="drawer__price">
            <div className="drawer__final">
              <p>Final price: </p>
              <div></div>
              <b>2410 dlr.</b>
            </div>
            <div className="drawer__final">
              <p>Tax 5%: </p>
              <div></div>
              <b>60 dlr.</b>
            </div>
            <button>Buy <img src="img/strela.svg" /></button>
          </div>
          </div>
        </div>
  )
}

export default Drawer