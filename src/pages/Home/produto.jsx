import { useContext} from "react"
import {CartContext} from "./../../context/cart-context"


export default function Produto({id,name,price,imgUrl}){
  const { addToCart,carrinho} = useContext(CartContext)
    
   const quantityItem = carrinho[id]
 return(
    
    <article className='article'>
        <div className='content-img'>
            <img src={imgUrl} alt={name}/>
        </div>

        <div className='content'>
            <span>{name}</span>
            <span>$ {price}</span>     
        </div>

          <button className="btn" onClick={() => addToCart(id)}>
            Add to cart
           {quantityItem > 0 && <p>({quantityItem})</p>}           
          </button>              
    </article>    
               
  )
}
