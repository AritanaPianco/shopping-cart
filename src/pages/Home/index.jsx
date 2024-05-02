import React from 'react'
import { PRODUTOS } from "./../../products"
import Produto from './produto'
import "./home.css"


export default function Home() {
      

  
  return (
    <div className='section-products'>
       <div className='container article-container'>
        {PRODUTOS.map((produto) => {
         return <Produto key={produto.id} {...produto}/>
        })}
       </div>     
    </div>
  )
}
