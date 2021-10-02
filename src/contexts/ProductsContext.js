import axios from "axios";
import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { CircularIndeterminate } from "../components/molecules/CircularIndeterminate";

export const ProductsContext = createContext({});

export const ProductsProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [temporary, setTemporary] = useState([]);

    const { error, isLoading } = useQuery(
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
                    };
                });
                response = productFormatted;
                setProducts(productFormatted);
                setTemporary(productFormatted);
            });
        },
        {
            retry: false,
            refetchOnWindowFocus: false,
        }
    );

    if (error) return <h1> Error: {error}, tente novamente!</h1>;

    if (isLoading) return <CircularIndeterminate />;

    function searchProduct(productName) {
        const lowerName = productName.toLowerCase();

        const filteredProducts = temporary.filter((product) =>
            product.name.toLowerCase().includes(lowerName)
        );

        setProducts(filteredProducts);
    }

    return (
        <ProductsContext.Provider value={{ products, searchProduct }}>
            {props.children}
        </ProductsContext.Provider>
    );
};
