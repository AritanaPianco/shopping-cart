import RoutesApp from "./routes/routes"
import ShopContexto from "./context/cart-context"


function App() {


  return(
    <>
       <ShopContexto>
         
           <RoutesApp/>

       </ShopContexto>
    </>
  )
}

export default App
