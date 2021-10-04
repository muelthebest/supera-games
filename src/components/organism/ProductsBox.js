import { styled } from "@mui/material/styles";

import { Grid, Box } from "@mui/material";
import { useProducts } from "../../hooks/useProducts";

import { ProductGrid } from "../molecules/ProductGrid";
import { CircularIndeterminate } from "../molecules/CircularIndeterminate";

const GridContainer = styled(Grid)(({ theme }) => ({
    padding: 0,
    margin: 0,
    width: "100%",
}));

export const ProductsBox = () => {
    const { products, isLoading } = useProducts();

    return (
        <>
            <GridContainer container spacing={3}>
                {products.map((product) =>
                    !isLoading ? (
                        <ProductGrid product={product} key={product.id} />
                    ) : (
                        <CircularIndeterminate key={product.id} />
                    )
                )}
            </GridContainer>
        </>
    );
};
