import axios from "axios";
import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { ErrorPage } from "../pages/ErrorPage";

export const ProductsContext = createContext({});

export const ProductsProvider = (props) => {
    const token =
        "Bearer eyJjdHkiOiJKV1QiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..mVKRS0kaNFrWfxMGuTrWdQ.tjnOUHaze19JwNr2t3xwYDMlYwL6BGSyTTwd9EDXav7TFu2TpVbZVLDx-I8i4ue1Faqyoly5KsARxPaO807URHwkZIzsOxSyZ1e8oKCDlSDaHC3uyzmph0e7z75jTy0gLmxCOuMwriyEXuDPJNSkSqylBsRI1yWvoMt7uyfa4Gf1u-McUAHh1N6_ZHkBMEItiwV8eBhDSue9Of3RdgKZXDV19GCksq42NxjD4gOAnZxX5Ade8qJMje1-x-PYDiw5mrEVDuw8qmZpxYSbGCieqpxTk4yrp-ldnU2Z_cfZpmsRGMrqh3St4_XbLjLYGK1bDF1fR1eZlDaJOV8G4pHs4SC7wtTxRGK1m1DM1RGwEeUAyLVSnPEszx9MkHH10R4kK1F8vDUZlueoRTzX6_G5Mk3xGK2Z4mIRZrQARok9knpf1yKKYihU4x2_dt4rV42jWbVxZTjMVh94f1sa9i0_AH4txH2WD_eZuL4O31-nA4uLfUNlTbjx5Di3ftihKS6Z9EkEIH2_DFp9Lv2cqSJYl2aawur63tkvW63cDU_Humhtj3gApNMTSh_kvZH9FzipLPccnKKR2GbjjBSqx0fvxl1HSJlaDQUFstC4Zd4Cw4VApRCO8OFZPCEaZKMRwPmc7_rH_38Yxp9K9bzXs9vOUXndxKxBg7-f_uQu1EPNNz9eKcimp4Oawg3eZXAxtd8gLhUK1OLKR-44kEgez0R2g8DyFEAhWGkynrguZhKd1TseXaloySOZmGxgsPHxAFzjm362Vt9Czn-cPGYyxdsRfDNvV6uicAaQagiFYkE_Yx6IKUZHKt1Ucd-gzuKNAGQGpDJA5FPIkh8QcaOFC4qaaYMibke99KoN_l-n01LpT5GL0lhouDFX5gHnMqjxJ4-cu4QwqOyeBCzyuLJ_JzCAy-JlqhoJQMqcAJWDtGeb4IKOf7aoK5y5yFkT-jBcWiSrQD_hQPS8X7qfZ7WDehEJBaxRYdxeskDTPdCHwLJzcbEN-JKwI5yNAxKek1wjWx1vDpmAItuqcjOxmGOzzWnXhBAh-vQZO9R7rrj7v-s2m93PiUEgWyUGDBNDKiDABMotzYxS4X92V8YiPti3fk1NRv8GH9XK_7HTeq8hi94z-7empdQceicXAfkIYxIizQvwnbhD9gTQsLTmNlgtXglu0y_s743Jc-OrC9qjSTdJq-znlIrai17-ZfC-QNk1QMh8S8l9hACqbESxWWM3swUxppSXBnqaC2C9dWn5cbHBSNMJVHGP3oGA6ROG5Z50hdUcSYqAsKDC2zD_g-_8NlaNaOjIOKjX9WPVvptRZx4MinzPu6Voh_DDCkhiuyxkXN2wD6SODUyGqUC1qsO-qvkRMmH6tqqfdkLtBTpaAzFw_9tUGOogd0Y9kjHmByDcLQN3hgyXUKEPj8JEQt3Hq2WMaEbLv3cCs87gSPFwXQNZX6j5NFpCoT_cqbPzf42jBj_p.fowxyvyfCambBpk4KMdHgg";
    const [products, setProducts] = useState([]);
    const [temporary, setTemporary] = useState([]);

    function formatMoney(product) {
        return product.data.content.map((product) => {
            return {
                ...product,
                price: product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                }),
            };
        });
    }

    const { error, isLoading } = useQuery(
        "products",
        () => {
            return axios(
                "http://localhost:8082/v1/products/pageable?sort=price,asc",
                {
                    headers: {
                        Authorization: token,
                    },
                }
            ).then((response) => {
                const productsFormatted = formatMoney(response);
                setProducts(productsFormatted);
                setTemporary(productsFormatted);
            });
        },
        {
            retry: false,
            refetchOnWindowFocus: false,
        }
    );

    if (error) {
        return <ErrorPage />;
    }

    const searchProduct = (productName) => {
        const lowerName = productName.toLowerCase();

        const filteredProducts = temporary.filter((product) =>
            product.name.toLowerCase().includes(lowerName)
        );

        setProducts(filteredProducts);
    };

    async function filterNameProducts(type, queryParam) {
        await axios(
            `http://localhost:8082/v1/products/pageable?sort=${type},${queryParam}`,
            {
                headers: {
                    Authorization: token,
                },
            }
        ).then((response) => {
            setProducts(formatMoney(response));
        });
    }

    async function filterSliceProducts(type, min, max, order) {
        await axios(
            `http://localhost:8082/v1/products/${type}?max=${max}&min=${min}&sort=${type},${order}`,
            {
                headers: {
                    Authorization: token,
                    min: min,
                    max: max,
                },
            }
        ).then((response) => {
            setProducts(formatMoney(response));
        });
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                searchProduct,
                isLoading,
                filterNameProducts,
                filterSliceProducts,
            }}
        >
            {props.children}
        </ProductsContext.Provider>
    );
};
