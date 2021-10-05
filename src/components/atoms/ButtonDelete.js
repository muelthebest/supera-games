import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../hooks/useCart";

export const ButtonDelete = (props) => {
    const { removeProduct } = useCart();

    const handleRemoveProduct = (productId) => {
        removeProduct(productId);
    };

    return (
        <>
            <IconButton
                onClick={() => handleRemoveProduct(props.id)}
                aria-label="delete"
                {...props}
            >
                <DeleteIcon />
            </IconButton>
        </>
    );
};
