import { List, ListSubheader, Toolbar } from "@mui/material";
import { AlphabetFilter } from "../atoms/AlphabetFilter";
import { PriceFilter } from "../atoms/PriceFilter";
import { ScoreFilter } from "../atoms/ScoreFilter";

export const WriteDrawer = () => {
    return (
        <>
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
                <ScoreFilter />
            </List>
        </>
    );
};
