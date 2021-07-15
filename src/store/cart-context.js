import React,{createContext} from 'react'

const CartContext = createContext({
  
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    remove: (id)=>{},

})

 
 
export default CartContext;