import { styled } from "@mui/material/styles";

import { Grid } from "@mui/material";
import { useProducts } from "../../hooks/useProducts";

import { ProductGrid } from "../molecules/ProductGrid";

const GridContainer = styled(Grid)(({ theme }) => ({
    padding: 0,
    margin: 0,
    width: "100%",
}));

export const ProductsBox = () => {
    const { products } = useProducts();

    return (
        <>
            <GridContainer container spacing={3}>
                {products.map((product) => (
                    <ProductGrid product={product} key={product.id} />
                ))}
            </GridContainer>
        </>
    );
};
