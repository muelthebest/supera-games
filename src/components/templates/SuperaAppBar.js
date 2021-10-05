import { useProducts } from "../../hooks/useProducts";

import { AppBar, Box, Toolbar } from "@mui/material";

import { useDrawerResponsive } from "../../hooks/useDrawerResponsive";
import { useCart } from "../../hooks/useCart";
import { BadgeCart } from "../organism/BadgeCart";
import { SearchProduct } from "../organism/SearchProduct";
import { LogoButton } from "../organism/LogoButton";
import { MenuFilterMobile } from "../organism/MenuFilterMobile";
import { BoxGrow } from "../atoms/BoxGrow";

export function SuperaAppBar() {
    const { handleDrawerToggle } = useDrawerResponsive();
    const { searchProduct } = useProducts();
    const { cart, totalItems } = useCart();

    function handleSearchProduct(productName) {
        searchProduct(productName);
    }

    return (
        <Box sx={{ flexGrow: 1, zIndex: 200, position: "relative" }}>
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <MenuFilterMobile
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                    />

                    <LogoButton />

                    <BoxGrow />

                    <SearchProduct
                        placeholder="Procurar ..."
                        onChange={(ev) => handleSearchProduct(ev.target.value)}
                    />

                    <BoxGrow />

                    <BadgeCart
                        badgeContent={totalItems > 0 ? totalItems : "0"}
                        color="info"
                        sx={{ marginTop: 3 }}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
