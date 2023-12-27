import { Offcanvas, OffcanvasHeader, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { CartItem } from "../components/CartItem";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps ) {
        const { closeCart, cartItems } = useShoppingCart() 
    return (
                <Offcanvas show={isOpen} onHide={closeCart} placement="end">
                    <OffcanvasHeader closeButton>
                        <Offcanvas.Title>Cart</Offcanvas.Title>
                    </OffcanvasHeader>
                    <Offcanvas.Body>
                        <Stack gap={3}>
                            {cartItems.map(item => (
                                <CartItem key={item.id} {...item} />
                            ))}
                        </Stack>
                    </Offcanvas.Body>
                </Offcanvas>
    )
}