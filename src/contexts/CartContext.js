import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext({});

export const CartProvider = (props) => {
    const [cart, setCart] = useState(() => {
        const storagedCart = localStorage.getItem("@superaGames:cart");

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    async function addProduct(productId) {
        try {
            const { data: products } = await axios(
                `http://localhost:3001/products/${productId}`
            );

            setCart([...cart, products]);
            localStorage.setItem(
                "@superaGames:cart",
                JSON.stringify([...cart, products])
            );
            toast.success("Item adicionado ao carrinho!", {
                position: toast.POSITION.TOP_LEFT,
            });
        } catch (e) {
            toast.error("Ocorreu um erro, tente novamente!", {
                position: toast.POSITION.TOP_LEFT,
            });
        }
    }

    return (
        <CartContext.Provider value={{ cart, addProduct }}>
            {props.children}
        </CartContext.Provider>
    );
};
