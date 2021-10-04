import { useProducts } from "../../hooks/useProducts";

import { AppBar, Box, Toolbar } from "@mui/material";

import { useDrawerResponsive } from "../../hooks/useDrawerResponsive";
import { useCart } from "../../hooks/useCart";
import { BadgeCart } from "../organism/BadgeCart";
import { SearchProduct } from "../organism/SearchProduct";
import { LogoButton } from "../organism/LogoButton";
import { MenuFilterMobile } from "../organism/MenuFilterMobile";
import { BoxGrow } from "../atoms/BoxGrow";
import { styled } from "@mui/system";

export function SuperaAppBar() {
    const { handleDrawerToggle } = useDrawerResponsive();
    const { searchProduct } = useProducts();
    const { cart } = useCart();

    function handleSearchProduct(productName) {
        searchProduct(productName);
    }

    const AppBox = styled(Box)(({ theme }) => ({
        flexGrow: 1,
        zIndex: 200,
        position: "relative",
    }));

    return (
        <AppBox>
            <AppBar position="static" color="transparent">
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
                        badgeContent={cart.length}
                        color="info"
                        sx={{ marginTop: 3 }}
                    />
                </Toolbar>
            </AppBar>
        </AppBox>
    );
}
