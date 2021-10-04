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

    async function filterProducts(type, queryParam) {
        await axios(
            `http://localhost:3001/products/?_sort=${type}&_order=${queryParam}`
        ).then((response) => {
            const productsFormatted = formatMoney(response);

            setProducts(productsFormatted);
        });
    }

    return (
        <ProductsContext.Provider
            value={{ products, searchProduct, isLoading, filterProducts }}
        >
            {props.children}
        </ProductsContext.Provider>
    );
};
