import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ButtonDelete } from "../atoms/ButtonDelete";
import { Money } from "../atoms/Money";

export const ListCartProducts = (props) => {
    const size = 70;

    return (
        <List
            sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
            }}
            key={props.product.id}
        >
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        variant="square"
                        sx={{ height: size, width: size }}
                        alt={props.product.name}
                        src={`../../assets/${props.product.image}`}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={props.product.name}
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
                                Quantidade: {props.product.quantity}
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
                                        props.product.price *
                                            props.product.quantity
                                    ).toLocaleString("pt-br", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </Money>
                                <ButtonDelete id={props.product.id} />
                            </Box>
                        </Box>
                    }
                />
            </ListItem>
        </List>
    );
};
