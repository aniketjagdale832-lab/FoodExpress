import { toast } from "react-toastify";

export function addToCart(item,navigate){

    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = existingCartItems.find(
        (cartItem)=> cartItem.name === item.name
    );
    if(existingItem){
        existingItem.quantity += 1;
    }else{
        existingCartItems.push({
            ...item,
            quantity: 1,
        });
    }

    localStorage.setItem("cartItems",JSON.stringify(existingCartItems));
    toast.success(`${item.name} added to cart!`)
    navigate("/cart");

}