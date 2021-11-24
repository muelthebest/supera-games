import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext({});

export const CartProvider = (props) => {
    const token =
        "Bearer eyJjdHkiOiJKV1QiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..mVKRS0kaNFrWfxMGuTrWdQ.tjnOUHaze19JwNr2t3xwYDMlYwL6BGSyTTwd9EDXav7TFu2TpVbZVLDx-I8i4ue1Faqyoly5KsARxPaO807URHwkZIzsOxSyZ1e8oKCDlSDaHC3uyzmph0e7z75jTy0gLmxCOuMwriyEXuDPJNSkSqylBsRI1yWvoMt7uyfa4Gf1u-McUAHh1N6_ZHkBMEItiwV8eBhDSue9Of3RdgKZXDV19GCksq42NxjD4gOAnZxX5Ade8qJMje1-x-PYDiw5mrEVDuw8qmZpxYSbGCieqpxTk4yrp-ldnU2Z_cfZpmsRGMrqh3St4_XbLjLYGK1bDF1fR1eZlDaJOV8G4pHs4SC7wtTxRGK1m1DM1RGwEeUAyLVSnPEszx9MkHH10R4kK1F8vDUZlueoRTzX6_G5Mk3xGK2Z4mIRZrQARok9knpf1yKKYihU4x2_dt4rV42jWbVxZTjMVh94f1sa9i0_AH4txH2WD_eZuL4O31-nA4uLfUNlTbjx5Di3ftihKS6Z9EkEIH2_DFp9Lv2cqSJYl2aawur63tkvW63cDU_Humhtj3gApNMTSh_kvZH9FzipLPccnKKR2GbjjBSqx0fvxl1HSJlaDQUFstC4Zd4Cw4VApRCO8OFZPCEaZKMRwPmc7_rH_38Yxp9K9bzXs9vOUXndxKxBg7-f_uQu1EPNNz9eKcimp4Oawg3eZXAxtd8gLhUK1OLKR-44kEgez0R2g8DyFEAhWGkynrguZhKd1TseXaloySOZmGxgsPHxAFzjm362Vt9Czn-cPGYyxdsRfDNvV6uicAaQagiFYkE_Yx6IKUZHKt1Ucd-gzuKNAGQGpDJA5FPIkh8QcaOFC4qaaYMibke99KoN_l-n01LpT5GL0lhouDFX5gHnMqjxJ4-cu4QwqOyeBCzyuLJ_JzCAy-JlqhoJQMqcAJWDtGeb4IKOf7aoK5y5yFkT-jBcWiSrQD_hQPS8X7qfZ7WDehEJBaxRYdxeskDTPdCHwLJzcbEN-JKwI5yNAxKek1wjWx1vDpmAItuqcjOxmGOzzWnXhBAh-vQZO9R7rrj7v-s2m93PiUEgWyUGDBNDKiDABMotzYxS4X92V8YiPti3fk1NRv8GH9XK_7HTeq8hi94z-7empdQceicXAfkIYxIizQvwnbhD9gTQsLTmNlgtXglu0y_s743Jc-OrC9qjSTdJq-znlIrai17-ZfC-QNk1QMh8S8l9hACqbESxWWM3swUxppSXBnqaC2C9dWn5cbHBSNMJVHGP3oGA6ROG5Z50hdUcSYqAsKDC2zD_g-_8NlaNaOjIOKjX9WPVvptRZx4MinzPu6Voh_DDCkhiuyxkXN2wD6SODUyGqUC1qsO-qvkRMmH6tqqfdkLtBTpaAzFw_9tUGOogd0Y9kjHmByDcLQN3hgyXUKEPj8JEQt3Hq2WMaEbLv3cCs87gSPFwXQNZX6j5NFpCoT_cqbPzf42jBj_p.fowxyvyfCambBpk4KMdHgg";
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

    const addProduct = async (productId) => {
        try {
            const { data: products } = await axios(
                `http://localhost:8082/v1/products/${productId}`,
                {
                    headers: {
                        Authorization: token,
                    },
                }
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
    };

    const removeProduct = (productId) => {
        try {
            const updatedCart = cart.filter(
                (cartItem) => cartItem.id !== productId
            );

            setCart(updatedCart);
            localStorage.setItem(
                "@superaGames:cart",
                JSON.stringify(updatedCart)
            );
        } catch (e) {
            toastMessage(toast.error, "Ocorreu um erro, tente novamente");
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addProduct,
                removeProduct,
                totalItems,
                totalFreight,
                totalPrice,
                parcialPrice,
                toastMessage,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
