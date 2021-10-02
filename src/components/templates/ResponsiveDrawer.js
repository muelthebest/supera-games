import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

import { styled } from "@mui/material/styles";
import { useDrawerResponsive } from "../../hooks/useDrawerResponsive";
import { useProducts } from "../../hooks/useProducts";
import { ImageGames } from "../atoms/ImageGames";
import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const drawerWidth = 240;

const BoxDrawer = styled(Box)(({ theme }) => ({
    zIndex: -999,
}));

const GridContainer = styled(Grid)(({ theme }) => ({
    padding: 0,
    margin: 0,
    width: "100%",
}));

const ProductPaper = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}));

const Money = styled(Typography)(({ theme }) => ({
    color: "green",
    fontSize: 18,
}));

export function ResponsiveDrawer(props) {
    const { window } = props;
    const { mobileOpen, handleDrawerToggle } = useDrawerResponsive();
    const { products } = useProducts();

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
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                }}
            >
                <GridContainer container spacing={3}>
                    {products.map((product) => (
                        <Grid
                            key={product.id}
                            item
                            
                            lg={3}
                            md={4}
                            sm={6}
                        >
                            <ProductPaper elevation={3}
                            sx={{
                                paddingTop: 1.5,
                                paddingBottom: 1.5
                            }}>
                                <ImageGames api={product} />
                                <Typography
                                    variant="overline"
                                    color="HighlightText"
                                >
                                    {product.name}  
                                </Typography>
                                <Money variant="button" >{product.price}</Money>
                                <Box sx={{ flexGrow: 1 }} />
                                <Button sx={{width: "90%"}} variant="contained" color="success">Comprar</Button>
                            </ProductPaper>
                        </Grid>
                    ))}
                </GridContainer>
            </Box>
        </Box>
    );
}
