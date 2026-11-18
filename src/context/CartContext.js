import { createContext , useState } from "react"

export const ShopContext = createContext()

export const CartProvider= (props) =>  {
    const [cartItems , setCartItems] = useState([])

    const addToCart = (itemId) =>{
        if(!cartItems.find((item)=> item.id === itemId)){
            return setCartItems([...cartItems , { id : itemId , count : 1}])
        }else{
            setCartItems(cartItems.map((item)=>{
                if(item.id === itemId){
                    return {...item , count : item.count + 1}
                }else{
                    return item
                }
            }))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems(cartItems.map((i)=>{
            if(i.id === itemId){
                return {...i , count : i.count - 1}
            }else{
                return i 
            }
        }).filter((i)=> i.count > 0))
    }

    const contextValue = [cartItems , addToCart , removeFromCart]
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

