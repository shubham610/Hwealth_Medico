import React from 'react'

const Cart = ({cart,setCart}) => {
  if(!cart){
    return <div>Cart Empty</div>
  };
  return (
    <div>
        {cart.map(p=>{
            return JSON.stringify(p);
        })}
    </div>
  )
}

export default Cart