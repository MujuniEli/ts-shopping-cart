import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}
const ShoppingCartContext = createContext({} as ShoppingCartContext)

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    return (
            <ShoppingCartContext.Provider value={{ getItemQuantity(id) {
                
            },}}>
                {children}
            </ShoppingCartContext.Provider>
    )
}