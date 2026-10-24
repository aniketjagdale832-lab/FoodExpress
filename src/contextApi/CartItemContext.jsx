import { createContext, useState } from "react";
import {toast} from 'react-toastify'

export const CartItemContext = createContext();

export default function CartItemProvider({children}){

    const [cartItems,setCartItems] = useState(
        JSON.parse(localStorage.getItem("cartItems")) || [],
    );

    function addToCart(item,navigate){
        
        const existingItem = cartItems.find(
            (existingCartItem)=> existingCartItem.name === item.name
        );

        let updateCartItems;
        if(existingItem){
            updateCartItems =cartItems.map((existingCartItem)=>{
                if(existingCartItem.name === item.name){
                    return {...existingCartItem,quantity:existingCartItem.quantity + 1};

                }
                return existingCartItem;
            });
        }else{
           updateCartItems = [...cartItems,{...item,quantity:1}]
        }
    
        localStorage.setItem("cartItems",JSON.stringify(updateCartItems));
        setCartItems(updateCartItems);
        toast.success(`${item.name} added to cart!`)
        navigate("/cart");
    }    
        
    function increaseQuantity (cartItem) {

        const existingItems = JSON.parse(localStorage.getItem('cartItems')) || []

        const updatedItems = existingItems.map((item) => {
            if (item.name === cartItem.name) {
                return { ...item, quantity: item.quantity + 1 }
            } return item;
        })


        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        setCartItems(updatedItems);
    }


    const decreaseQuantity=(cartItem) =>{
        const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const updateItems = existingItems.map((item) => {
            if (item.name === cartItem.name) {
                return ({ ...item, quantity: item.quantity - 1 });
            }
            return (item)
        })

        localStorage.setItem("cartItems", JSON.stringify(updateItems));
        setCartItems(updateItems);
    }

    const removeItemFromCart = (cartItem) => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const updateCartItems = cartItems.filter(
            (item) => item.name !== cartItem.name);
        localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
        setCartItems(updateCartItems);

    }

    const clearCart = ()=>{
        setCartItems([]);
        localStorage.removeItem("cartItems");
    }
    
    



    return (
        <>
        <CartItemContext
           value={{
            cartItems,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            removeItemFromCart,
            clearCart
            }}
            >
            {children}
        </CartItemContext>

        </>
    )

}