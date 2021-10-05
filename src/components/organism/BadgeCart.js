import { styled } from "@mui/material/styles";

import {
    Avatar,
    Badge,
    Button,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Popover,
    Typography,
} from "@mui/material";
import { useModal } from "../../hooks/useModal";
import { useCart } from "../../hooks/useCart";

import { CartButton } from "../molecules/CartButton";
import { Money } from "../atoms/Money";
import { Box } from "@mui/system";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 18,
    },
}));

export const BadgeCart = (props) => {
    const { anchorEl, handleClick, handleClose, open, id } = useModal();
    const { cart, totalItems, totalFreight, totalPrice, parcialPrice } =
        useCart();
    const size = 70;

    console.log(parcialPrice);

    return (
        <>
            <StyledBadge {...props}>
                <CartButton
                    aria-describedby={id}
                    onClick={handleClick}
                    color="primary"
                    sx={{ marginRight: 2 }}
                />
            </StyledBadge>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                {totalItems === 0 ? (
                    <List>
                        <ListItemText primary="Seu carrinho está vazio" />
                    </List>
                ) : (
                    <>
                        {cart.map((product) => (
                            <List
                                sx={{
                                    width: "100%",
                                    maxWidth: 360,
                                    bgcolor: "background.paper",
                                }}
                                key={product.id}
                            >
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar
                                            variant="square"
                                            sx={{ height: size, width: size }}
                                            alt={product.name}
                                            src={`../../assets/${product.image}`}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={product.name}
                                        secondary={
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                }}
                                            >
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Quantidade:{" "}
                                                    {product.quantity}
                                                </Typography>
                                                <Box>
                                                    Subtotal:
                                                    <Money
                                                        sx={{
                                                            fontSize: 15,
                                                            paddingLeft: 1,
                                                            paddingRight: 2,
                                                        }}
                                                    >
                                                        {parseFloat(
                                                            product.price *
                                                                product.quantity
                                                        ).toLocaleString(
                                                            "pt-br",
                                                            {
                                                                style: "currency",
                                                                currency: "BRL",
                                                            }
                                                        )}
                                                    </Money>
                                                </Box>
                                            </Box>
                                        }
                                    />
                                </ListItem>
                            </List>
                        ))}
                        <List>
                            <Divider />
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
                                                {totalPrice.toLocaleString(
                                                    "pt-br",
                                                    {
                                                        style: "currency",
                                                        currency: "BRL",
                                                    }
                                                )}
                                            </Money>
                                        </Box>
                                    }
                                    secondary={
                                        <Box>
                                            valor:{" "}
                                            <Money sx={{ fontSize: 13 }}>
                                                {parcialPrice.toLocaleString(
                                                    "pt-br",
                                                    {
                                                        style: "currency",
                                                        currency: "BRL",
                                                    }
                                                )}{" "}
                                            </Money>
                                            + frete:{" "}
                                            <Money sx={{ fontSize: 13 }}>
                                                {totalFreight.toLocaleString(
                                                    "pt-br",
                                                    {
                                                        style: "currency",
                                                        currency: "BRL",
                                                    }
                                                )}
                                            </Money>
                                        </Box>
                                    }
                                />
                                <Button variant="contained" color="info">
                                    Finalizar Pedido
                                </Button>
                            </ListItem>
                        </List>
                    </>
                )}
            </Popover>
        </>
    );
};
