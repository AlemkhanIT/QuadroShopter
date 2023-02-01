import React from 'react';
import Cards from "../components/Cards/Cards";

function Purchases({items,onAddToCart}) {
  return (
    <div className="content">
      <div className="on__content">
        <h1>My purchases</h1>
      </div>
      
      <div className="items">
      {items.map((item,index)=>(
            <Cards 
            key={index}
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            plused={true}
            />
          ))}
      </div>
    </div>
  )
}

export default Purchases