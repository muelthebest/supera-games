import { Toolbar } from "@mui/material";
import { Box, styled } from "@mui/system";
import { DrawerPermanent } from "../molecules/DrawerPermanent";
import { DrawerTemporary } from "../molecules/DrawerTemporary";

const drawerWidth = 240;

const BoxDrawer = styled(Box)(({ theme }) => ({
    zIndex: 100,
}));

const drawer = (
    <Box>
        <Toolbar />
        <button>oi</button>
    </Box>
);

export const DrawerResponsive = (props) => {
    return (
        <BoxDrawer
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <DrawerTemporary width={drawerWidth}>{drawer}</DrawerTemporary>
            <DrawerPermanent width={drawerWidth}>{drawer}</DrawerPermanent>
        </BoxDrawer>
    );
};
