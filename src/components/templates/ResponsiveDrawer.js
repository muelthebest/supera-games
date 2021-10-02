import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

import { styled } from "@mui/material/styles";
import { useDrawerResponsive } from "../../hooks/useDrawerResponsive";

import { ProductsBox } from "../organism/ProductsBox";
import { BoxGrow } from "../atoms/BoxGrow";

const drawerWidth = 240;

const BoxDrawer = styled(Box)(({ theme }) => ({
    zIndex: -999,
}));

export function ResponsiveDrawer(props) {
    const { window } = props;
    const { mobileOpen, handleDrawerToggle } = useDrawerResponsive();

    const drawer = (
        <div>
            <Toolbar />
            <h1>Teste</h1>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <BoxDrawer
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </BoxDrawer>
            <BoxGrow component="main" sx={{ p: 3 }}>
                <ProductsBox />
            </BoxGrow>
        </Box>
    );
}
