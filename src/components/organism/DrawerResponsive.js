import { Toolbar } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useProducts } from "../../hooks/useProducts";
import { DrawerPermanent } from "../molecules/DrawerPermanent";
import { DrawerTemporary } from "../molecules/DrawerTemporary";

const drawerWidth = 240;

const BoxDrawer = styled(Box)(({ theme }) => ({
    zIndex: 100,
}));

export const DrawerResponsive = (props) => {
    const { filterProducts } = useProducts();

    function handleFilterProducts(type, queryParam) {
        filterProducts(type, queryParam);
    }

    const drawer = (
        <Box>
            <Toolbar />
            <h1>Filtragem</h1>
            <button onClick={() => handleFilterProducts("price", "desc")}>
                oi
            </button>
        </Box>
    );

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
