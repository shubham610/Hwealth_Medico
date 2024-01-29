import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const CartItem = ({item,state,setstate,cart,setCart}) => {
    const [Qty, setQty] = useState(1)
    var index=cart.indexOf(item);
    console.log(index);
    const deleteItem=(index)=>{
        console.log("test");
        console.log(index);
        let list=cart;
        list.splice(index,1)
        setCart(list);
        setstate(!state);
    }
    console.log(cart);
  return (    <></>
  )
}

export default CartItem