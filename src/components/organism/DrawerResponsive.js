import { Toolbar } from "@mui/material";
import { Box, styled } from "@mui/system";
import { DrawerPermanent } from "../molecules/DrawerPermanent";
import { DrawerTemporary } from "../molecules/DrawerTemporary";

const drawerWidth = 240;

const BoxDrawer = styled(Box)(({ theme }) => ({
    zIndex: -999,
}));

const drawer = (
    <div>
        <Toolbar />
        <h1>Teste</h1>
    </div>
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
