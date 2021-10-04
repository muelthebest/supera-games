import { styled } from "@mui/material/styles";

import { Grid, Paper, Rating } from "@mui/material";
import { ImageGames } from "../atoms/ImageGames";
import { ButtonBuy } from "../atoms/ButtonBuy";
import { useCart } from "../../hooks/useCart";
import { BoxGrow } from "../atoms/BoxGrow";
import { ProductName } from "../atoms/ProductName";
import { Money } from "../atoms/Money";

const ProductPaper = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}));

export const ProductGrid = (props) => {
    const { addProduct } = useCart();

    function handleAddProduct(productId) {
        addProduct(productId);
    }
    return (
        <Grid {...props} item lg={3} md={4} sm={6}>
            <ProductPaper
                elevation={3}
                sx={{
                    paddingTop: 1.5,
                    paddingBottom: 1.5,
                }}
            >
                <ImageGames api={props.product} />

                <ProductName name={props.product.name} />

                <Rating
                    name="read-only"
                    value={props.product.score / 100}
                    precision={0.5}
                    readOnly
                />

                <Money>{props.product.price}</Money>

                <BoxGrow />

                <ButtonBuy onClick={() => handleAddProduct(props.product.id)} />
            </ProductPaper>
        </Grid>
    );
};
