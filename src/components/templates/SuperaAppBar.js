
import { useProducts } from "../../hooks/useProducts";

import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useDrawerResponsive } from "../../hooks/useDrawerResponsive";
import { useCart } from "../../hooks/useCart";
import { BadgeCart } from "../organism/BadgeCart";
import { SearchProduct } from "../organism/SearchProduct";
import { LogoButton } from "../organism/LogoButton";

export function SuperaAppBar() {
    const { handleDrawerToggle } = useDrawerResponsive();
    const { searchProduct } = useProducts();
    const { cart } = useCart();

    function handleSearchProduct(productName) {
        searchProduct(productName);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <LogoButton />

                    <Box sx={{ flexGrow: 1 }} />

                    <SearchProduct
                        placeholder="Procurar ..."
                        onChange={(ev) => handleSearchProduct(ev.target.value)}
                    />

                    <Box sx={{ flexGrow: 1 }} />

                    <BadgeCart
                        badgeContent={cart.length}
                        color="info"
                        sx={{ marginTop: 3 }}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
