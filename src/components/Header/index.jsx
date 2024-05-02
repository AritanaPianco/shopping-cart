import React from 'react'
import {Link} from "react-router-dom"
import "./header.css"
import {ShoppingCart} from "phosphor-react"

export default function Header() {
  return (
    <div className='header'>
         <header className='container header-content'>
               <h2>Eletro-ShoppingCart</h2>

                <nav className='nav'>
                   <Link to="/">Shop</Link>  
                   <Link to="/cart"><ShoppingCart className='icon'/></Link>  
                </nav>        
         </header>


    </div>
  )
}
