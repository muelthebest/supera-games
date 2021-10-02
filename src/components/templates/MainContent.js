import * as React from "react";

import Box from "@mui/material/Box";
import { ProductsBox } from "../organism/ProductsBox";
import { DrawerResponsive } from "../organism/DrawerResponsive";

export function MainContent(props) {
    return (
        <Box sx={{ display: "flex" }}>
            <DrawerResponsive />

            <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
                <ProductsBox />
            </Box>
        </Box>
    );
}
