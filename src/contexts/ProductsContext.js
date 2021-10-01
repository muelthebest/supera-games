import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const ProductsContext = createContext({});

export const ProductsProvider = (props) => {

    const { data: products , error, isLoading} = useQuery("products", () => {
        return axios("http://localhost:3001/products")
    },
    {
        retry: false,
        refetchOnWindowFocus: false,
    }
    )

    if(error) return <h1> Error: {error}, try again!</h1>
    
    if(isLoading) return <h1> Loading ...</h1>
    
    return (
        <ProductsContext.Provider value={{ products }}>
            {props.children}
        </ProductsContext.Provider>
    )
}