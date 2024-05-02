import {createContext,useState} from 'react'
import {PRODUTOS} from "./../products"

export const CartContext = createContext(null)


const getItemsId = () => {
    let cart = {}
    for(let i = 1; i <= PRODUTOS.length; i++){
          cart[i] = 0          
   } 
   return cart
   
}



export default function ShopContexto({children}){
      const [carrinho,setCarrinho] = useState(getItemsId())


    function countPriceItemQuantity(){
         let amount = 0
         for(let item in carrinho){
            if(carrinho[item] > 0){
               let infoItem = PRODUTOS.find((produto) => produto.id === Number(item))
               amount += carrinho[item] * infoItem.price   
            }
         } 
         return amount 
    }  

 
    function addToCart(itemId){
       setCarrinho((cart) => ({...cart, [itemId]: cart[itemId] + 1}))    
    }

    function removeFromCart(itemId){
       setCarrinho((cart) => ({...cart, [itemId]: cart[itemId] - 1}))    
    }

     function upadateItemValue(newValor,itemId){
       setCarrinho((cart) => ({...cart, [itemId]: newValor}))      

     }

  
    return(
        <CartContext.Provider 
        value={{
            addToCart,
            removeFromCart,
            carrinho,
            upadateItemValue,
            countPriceItemQuantity  
        }}>
                     

           {children}
        </CartContext.Provider>   
    )
    

}
