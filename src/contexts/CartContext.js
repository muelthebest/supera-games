import axios from "axios";
import React, { createContext, useState } from "react";

import { useProducts } from "../hooks/useProducts";

export const CartContext = createContext({});

export const CartProvider = (props) => {
    const [cart, setCart] = useState(() => {
        const storagedCart = localStorage.getItem("@superaGames:cart");

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const { products } = useProducts();

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
        } catch (e) {
            console.log("Ocorreu um erro, tente novamente!");
        }
    }

    return (
        <CartContext.Provider value={{ cart, addProduct }}>
            {props.children}
        </CartContext.Provider>
    );
};
