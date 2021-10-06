import {
    Avatar,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useCart } from "../../hooks/useCart";
import { Money } from "../atoms/Money";
import { TableBodyProducts } from "../molecules/TableBodyProducts";
import { TableCheckoutProducts } from "../molecules/TableCheckoutProducts";
import { TableHeadProducts } from "../molecules/TableHeadProducts";

export const TableDescriptionProducts = (props) => {
    const { totalPrice } = useCart();
    const size = 70;

    return (
        <>
            <TableContainer component={Paper} sx={{ height: "100vh" }}>
                <Table stickyHeader aria-label="spanning table">
                    <TableHeadProducts />
                    <TableBodyProducts products={props.products} size={size} />
                </Table>
            </TableContainer>
            <TableContainer sx={{ width: "100%", height: "15%" }}>
                <TableCheckoutProducts price={totalPrice} />
            </TableContainer>
        </>
    );
};
