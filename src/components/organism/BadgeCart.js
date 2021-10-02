import { styled } from "@mui/material/styles";

import { Badge, Icon, IconButton } from "@mui/material";
import { CartGame } from "../atoms/CartGames";
import { CartButton } from "../molecules/CartButton";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 18,
    },
}));

export const BadgeCart = (props) => {
    return (
        <>
            <StyledBadge
                {...props}
            >
            <CartButton color="primary" sx={{ marginRight: 2 }} />
            </StyledBadge>
        </>
    );
};
