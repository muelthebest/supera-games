import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";
import { CartButton } from "../molecules/CartButton";

import { useModal } from "../../hooks/useModal";
import { PopoverCart } from "../molecules/PopoverCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 18,
    },
}));

export const BadgeCart = (props) => {
    const { handleClick, id } = useModal();

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

            <PopoverCart />
        </>
    );
};
