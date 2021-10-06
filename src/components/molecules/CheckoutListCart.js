import { Button, List, ListItem, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { useCart } from "../../hooks/useCart";
import { Money } from "../atoms/Money";

export const CheckoutListCart = () => {
    const { totalFreight, totalPrice, parcialPrice } = useCart();

    return (
        <List>
            <ListItem
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                }}
            >
                <ListItemText
                    secondary={`Frete grátis com compras acima de 250 reais`}
                />
                <ListItemText
                    primary={
                        <Box>
                            Total:{" "}
                            <Money>
                                {totalPrice.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </Money>
                        </Box>
                    }
                    secondary={
                        <Box>
                            valor:{" "}
                            <Money sx={{ fontSize: 13 }}>
                                {parcialPrice.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                })}{" "}
                            </Money>
                            + frete:{" "}
                            <Money sx={{ fontSize: 13 }}>
                                {totalFreight.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </Money>
                        </Box>
                    }
                />
                <Button href="/form-final" variant="contained" color="info">
                    Finalizar Pedido
                </Button>
            </ListItem>
        </List>
    );
};
