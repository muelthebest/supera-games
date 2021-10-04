import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useProducts } from "../../hooks/useProducts";
import { useState } from "react";

export const PriceFilter = () => {
    const [show, setShow] = useState(false);
    const { filterSliceProducts } = useProducts();

    function handleFilterSliceProducts(type, min, max) {
        filterSliceProducts(type, min, max);
    }

    const handleClick = () => {
        setShow(!show);
    };

    const createMoneyList = (max) => (
        <>
            <ListItemButton
                sx={{ pl: 4 }}
                onClick={() =>
                    handleFilterSliceProducts("price", "0", `${max}`)
                }
            >
                <ListItemIcon>
                    <LocalAtmIcon />
                </ListItemIcon>
                <ListItemText primary={`Até ${max} reais`} />
            </ListItemButton>
        </>
    );

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText primary="Preço" />
                {show ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={show} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {createMoneyList(50)}
                    {createMoneyList(100)}
                    {createMoneyList(150)}
                    {createMoneyList(200)}
                    {createMoneyList(300)}
                </List>
            </Collapse>
        </>
    );
};
