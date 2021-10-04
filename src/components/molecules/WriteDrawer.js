import { List, ListSubheader, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AlphabetFilter } from "../atoms/AlphabetFilter";
import { PriceFilter } from "../atoms/PriceFilter";

export const WriteDrawer = () => {
    return (
        <>
            <Toolbar />
            <Toolbar />
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Filtrar por
                    </ListSubheader>
                }
            >
                <AlphabetFilter />
                <PriceFilter />
            </List>
        </>
    );
};
