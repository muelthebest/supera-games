import { List, ListItemText } from "@mui/material";

export const EmptyCartMessage = () => {
    return (
        <List>
            <ListItemText primary="Seu carrinho está vazio" />
        </List>
    );
};
