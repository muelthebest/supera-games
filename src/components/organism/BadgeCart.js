import { styled } from "@mui/material/styles";

import { Badge } from "@mui/material";
import { CartButton } from "../molecules/CartButton";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 18,
    },
}));

export const BadgeCart = (props) => {
    return (
        <>
            <StyledBadge {...props}>
                <CartButton color="primary" sx={{ marginRight: 2 }} />
            </StyledBadge>
        </>
    );
};
