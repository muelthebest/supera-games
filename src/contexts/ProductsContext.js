import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const ProductsContext = createContext({});

export const ProductsProvider = (props) => {
    const [products, setProducts] = useState([]);

    const { data, error, isLoading } = useQuery(
        "products",
        () => {
            return axios("http://localhost:3001/products").then((response) => {
                const productFormatted = response.data.map((product) => {
                    return {
                        ...product,
                        price: product.price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        }),
                        nameFormatted: `${product.name.substring(0, 20)}... `
                    };
                });
                setProducts(productFormatted);
            });
        },
        {
            retry: false,
            refetchOnWindowFocus: false,
        }
    );

    if (error) return <h1> Error: {error}, try again!</h1>;

    if (isLoading) return <h1> Loading ...</h1>;

    return (
        <ProductsContext.Provider value={{ products }}>
            {props.children}
        </ProductsContext.Provider>
    );
};
