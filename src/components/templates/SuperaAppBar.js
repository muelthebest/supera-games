import { CartGame } from "../atoms/CartGames";

import { useProducts } from "../../hooks/useProducts";

import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Icon,
    Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import { styled, alpha } from "@mui/material/styles";
import { useDrawerResponsive } from "../../hooks/useDrawerResponsive";
import { useCart } from "../../hooks/useCart";
import { BadgeCart } from "../organism/BadgeCart";
import { SearchProduct } from "../organism/SearchProduct";

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

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        SUPERA GAMES
                    </Typography>

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
