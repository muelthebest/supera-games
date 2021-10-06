import { useModal } from "../../hooks/useModal";
import { useCart } from "../../hooks/useCart";
import { Divider, Popover } from "@mui/material";
import { EmptyCartMessage } from "../atoms/EmptyCartMessage";
import { ListCartProducts } from "./ListCartProducts";
import { CheckoutListCart } from "./CheckoutListCart";

export const PopoverCart = () => {
    const { anchorEl, handleClose, open, id } = useModal();
    const { cart, totalItems } = useCart();

    return (
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
                <EmptyCartMessage />
            ) : (
                <>
                    {cart.map((product) => (
                        <ListCartProducts key={product.id} product={product} />
                    ))}
                    <Divider />
                    <CheckoutListCart />
                </>
            )}
        </Popover>
    );
};
