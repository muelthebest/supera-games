import { styled } from "@mui/material/styles";

import {
    Avatar,
    Badge,
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
import { Fragment } from "react";
import { Money } from "../atoms/Money";
import { Box } from "@mui/system";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 18,
    },
}));

export const BadgeCart = (props) => {
    const { anchorEl, handleClick, handleClose, open, id } = useModal();
    const { cart, totalItems } = useCart();
    const size = 70;

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
                    cart.map((product) => (
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
                                                Quantidade: {product.quantity}
                                            </Typography>
                                            <Money>
                                                {product.priceFormatted}
                                            </Money>
                                        </Box>
                                    }
                                />
                            </ListItem>
                        </List>
                    ))
                )}
            </Popover>
        </>
    );
};
