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

    const toastMessage = (typeToast, message) => {
        return typeToast(message, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 1300,
        });
    };

    const parcialPrice = cart.reduce((sumTotal, product) => {
        sumTotal += product.price * product.quantity;
        return sumTotal;
    }, 0);

    const totalFreight = cart.reduce((sumTotal, product) => {
        sumTotal += product.freight;
        if (parcialPrice >= 250) {
            return 0;
        }
        return sumTotal;
    }, 0);

    const totalPrice = cart.reduce((sumTotal, product) => {
        sumTotal = parcialPrice + totalFreight;
        return sumTotal;
    }, 0);

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
                        freight: 10,
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
                            freight: 10,
                        },
                    ])
                );
                toastMessage(toast.success, "Item adicionado ao carrinho!");
                return;
            }
            const updatedCart = cart.map((product) =>
                product.id === productId
                    ? {
                          ...product,
                          quantity: Number(product.quantity) + 1,
                          freight:
                              parcialPrice >= 250
                                  ? 0
                                  : Number(product.freight) + 10,
                      }
                    : product
            );
            setCart(updatedCart);
            localStorage.setItem(
                "@superaGames:cart",
                JSON.stringify(updatedCart)
            );
            toastMessage(toast.success, "Item adicionado ao carrinho!");

            return;
        } catch (e) {
            toastMessage(toast.error, "Ocorreu um erro, tente novamente!");
        }
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addProduct,
                totalItems,
                totalFreight,
                totalPrice,
                parcialPrice,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
