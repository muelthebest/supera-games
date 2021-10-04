import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useProducts } from "../../hooks/useProducts";
import { useState } from "react";

export const AlphabetFilter = () => {
    const [show, setShow] = useState(false);
    const { filterNameProducts } = useProducts();

    function handleFilterNameProducts(type, queryParam) {
        filterNameProducts(type, queryParam);
    }

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <SortByAlphaIcon />
                </ListItemIcon>
                <ListItemText primary="Ordem alfabética" />
                {show ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={show} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => handleFilterNameProducts("name", "asc")}
                    >
                        <ListItemText primary="Crescente [A-Z]" />
                    </ListItemButton>
                    <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => handleFilterNameProducts("name", "desc")}
                    >
                        <ListItemText primary="Decrescente [Z-A]" />
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    );
};
