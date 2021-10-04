import axios from "axios";
import { createContext, useState } from "react";
import { useQuery } from "react-query";

export const ProductsContext = createContext({});

export const ProductsProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [temporary, setTemporary] = useState([]);

    function formatMoney(product) {
        return product.data.map((product) => {
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
            return axios("http://localhost:3001/products").then((response) => {
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
        return `o problema foi ${error}, tente novamente`;
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
            `http://localhost:3001/products/?_sort=${type}&_order=${queryParam}`
        ).then((response) => {
            setProducts(formatMoney(response));
        });
    }

    async function filterSliceProducts(type, min, max) {
        await axios(
            `http://localhost:3001/products?_sort=${type}&_order=desc${type}_gte=${min}&${type}_lte=${max}`
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
