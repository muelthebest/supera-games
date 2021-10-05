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

    const totalItems = cart.reduce((sumTotal, product) => {
        sumTotal += product.quantity;
        return sumTotal;
    }, 0);

    async function addProduct(productId) {
        try {
            const { data: products } = await axios(
                `http://localhost:3001/products/${productId}`
            );

            const productAlreadyInCart = cart.find(
                (product) => product.id === productId
            );

            if (!productAlreadyInCart) {
                setCart([
                    ...cart,
                    {
                        ...products,
                        quantity: 1,
                        priceFormatted: parseFloat(
                            products.price
                        ).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        }),
                    },
                ]);
                localStorage.setItem(
                    "@superaGames:cart",
                    JSON.stringify([
                        ...cart,
                        {
                            ...products,
                            quantity: 1,
                            priceFormatted: parseFloat(
                                products.price
                            ).toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            }),
                        },
                    ])
                );
                toast.success("Item adicionado ao carrinho!", {
                    position: toast.POSITION.TOP_LEFT,
                });
                return;
            }
            const updatedCart = cart.map((product) =>
                product.id === productId
                    ? {
                          ...product,
                          quantity: Number(product.quantity) + 1,
                      }
                    : product
            );
            setCart(updatedCart);
            localStorage.setItem(
                "@superaGames:cart",
                JSON.stringify(updatedCart)
            );
            toast.success("Item adicionado ao carrinho!", {
                position: toast.POSITION.TOP_LEFT,
            });
            return;
        } catch (e) {
            toast.error("Ocorreu um erro, tente novamente!", {
                position: toast.POSITION.TOP_LEFT,
            });
        }
    }

    return (
        <CartContext.Provider value={{ cart, addProduct, totalItems }}>
            {props.children}
        </CartContext.Provider>
    );
};
