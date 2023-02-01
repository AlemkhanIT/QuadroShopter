import React from 'react'
import {Link} from 'react-router-dom';


function Drawer({onClose, items=[],onRemove}) {
  
  return (
    <div className="drawer">
          <div className="drawer__top"><h3>Cart</h3> <div onClick={onClose} className='button-close'><img src="/img/nonactive_cart.svg"/></div></div>
          {items.length==0?(
            <div className='drawer__empty'><p>Cart is empty</p><br/>
            <img height={340} src='img/box.webp'/>
            <Link to="/"><button onClick={onClose} className='buttonKl'>Go back to add to cart <img src="img/strela.svg" /></button></Link>
            </div>
          ):(
            <div className="drawer__cost">
            <div className="drawer__items">
              {items.map((item)=>(
                <div className="drawer__card">
                <img src={item.imgUrl}/>
                <div className="drawer__info">
                  <p>{item.title}</p>
                  <span>{item.price} dlr.</span>
                </div>
                <div onClick={()=>onRemove(item.id)} className='btnClose'><img src="/img/nonactive_cart.svg"/></div>
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
              <Link to="/purchases"><button onClick={onClose} className='buttonKl'>Buy <img src="img/strela.svg" /></button></Link>
            </div>
            </div>
          )}

        </div>
  )
}

export default Drawer