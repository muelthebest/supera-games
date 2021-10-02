import { IconButton } from "@mui/material";
import { CartGame } from "../atoms/CartGames";

export const CartButton = (props) => {
    return (
        <IconButton {...props}>
            <CartGame />
        </IconButton>
    );
};
