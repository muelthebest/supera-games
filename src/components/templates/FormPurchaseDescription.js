import { Grid, Typography } from "@mui/material";
import { TableDescriptionProducts } from "../organism/TableDescriptionProducts";
import { useCart } from "../../hooks/useCart";

export const FormPurchaseDescription = () => {
    const { cart } = useCart();

    return (
        <Grid item>
            <Typography variant="h5">Descrição da compra</Typography>

            <TableDescriptionProducts products={cart} />
        </Grid>
    );
};
