import React, { useContext } from 'react'
import {PRODUTOS} from "./../../products"
import { CartContext } from "./../../context/cart-context"
import CartItem from './cart'
import {useNavigate} from "react-router-dom"
import "./cart.css"

export default function Cart(){
  const {carrinho,countPriceItemQuantity} = useContext(CartContext)    
  const totalAmount = countPriceItemQuantity();
  
  const navigate = useNavigate()
  return (
    <div className='container-cart'>

           <div className='container container-carrinho'>
               {PRODUTOS.map((produto) => {
                 if(carrinho[produto.id] !== 0){
                   return <CartItem key={produto.id} {...produto}/> 
                  }       
                })}
                
           </div>

           {totalAmount > 0 ? (

             <span className='subTotal'>Total: $ {totalAmount}</span>
             
             ):
             (<h1>Carrinho vazio</h1> )}  
             <button className='btn' onClick={() => navigate("/")}>Shopping</button>        
              
                
    </div>
  )

}
