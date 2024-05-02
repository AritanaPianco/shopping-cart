import React, { useContext } from 'react'
import {CartContext} from "./../../context/cart-context"

export default function CartItem({ id,name,price,imgUrl }){
  const { addToCart,removeFromCart, upadateItemValue,carrinho} = useContext(CartContext)

 

  return(
      <article className='article-cart'>
          <div className='article-img'>
             <img src={imgUrl} alt={name} />  
          </div>

          <div className='price'>
             <span>{price}</span>  
          </div>
       
       <div>
            <button onClick={() => addToCart(id)}>+</button>
           <input value={carrinho[id]} onChange={(e) =>  upadateItemValue(Number(e.target.value),id)} />     
          <button onClick={() => removeFromCart(id)}>-</button> 

       </div>
            
          
   
      </article>

  )
}
