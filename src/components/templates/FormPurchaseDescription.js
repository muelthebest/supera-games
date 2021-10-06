import {
    Avatar,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    Toolbar,
    Typography,
} from "@mui/material";
import { useCart } from "../../hooks/useCart";
import { Money } from "../atoms/Money";

export const FormPurchaseDescription = () => {
    const { cart, totalPrice } = useCart();

    const size = 70;

    return (
        <Grid item>
            <Typography variant="h5">Descrição da compra</Typography>

            <TableContainer component={Paper} sx={{ height: "100vh" }}>
                <Table stickyHeader aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Imagem</TableCell>
                            <TableCell align="center">Produto</TableCell>
                            <TableCell align="center">Quantidade</TableCell>
                            <TableCell align="center">SubTotal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <Avatar
                                        variant="square"
                                        sx={{
                                            height: size,
                                            width: size,
                                        }}
                                        alt={product.name}
                                        src={`../../assets/${product.image}`}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" gutterBottom>
                                        {product.name}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant="button" gutterBottom>
                                        {product.quantity}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Money>
                                        {parseFloat(
                                            product.price * product.quantity
                                        ).toLocaleString("pt-br", {
                                            style: "currency",
                                            currency: "BRL",
                                        })}
                                    </Money>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer sx={{ width: "100%", height: "15%" }}>
                <Table stickyHeader>
                    <TableFooter>
                        <TableRow>
                            <TableCell align="right">
                                <Typography style={{ fontSize: 20 }}>
                                    TOTAL:
                                </Typography>
                                <Money style={{ fontSize: 15 }}>
                                    {totalPrice.toLocaleString("pt-br", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </Money>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Grid>
    );
};
