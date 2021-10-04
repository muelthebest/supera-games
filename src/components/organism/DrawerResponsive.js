import { Box, styled } from "@mui/system";
import { DrawerPermanent } from "../molecules/DrawerPermanent";
import { DrawerTemporary } from "../molecules/DrawerTemporary";

import { WriteDrawer } from "../molecules/WriteDrawer";

const drawerWidth = 240;

const BoxDrawer = styled(Box)(({ theme }) => ({
    zIndex: 100,
}));

export const DrawerResponsive = (props) => {
    return (
        <BoxDrawer
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <DrawerTemporary width={drawerWidth}>
                <WriteDrawer />
            </DrawerTemporary>
            <DrawerPermanent width={drawerWidth}>
                <WriteDrawer />
            </DrawerPermanent>
        </BoxDrawer>
    );
};
