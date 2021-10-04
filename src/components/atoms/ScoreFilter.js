import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useProducts } from "../../hooks/useProducts";
import { useState } from "react";

export const ScoreFilter = () => {
    const [show, setShow] = useState(false);
    const { filterSliceProducts } = useProducts();

    function handleFilterSliceProducts(type, min, max) {
        filterSliceProducts(type, min, max);
    }

    const handleClick = () => {
        setShow(!show);
    };

    const createStarList = (starsMax, starsNum) => (
        <>
            <ListItemButton
                sx={{ pl: 4 }}
                onClick={() =>
                    handleFilterSliceProducts(
                        "score",
                        `${starsMax - 100}`,
                        `${starsMax}`
                    )
                }
            >
                <ListItemIcon>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText
                    primary={`de ${starsNum - 1} a ${starsNum} estrelas`}
                />
            </ListItemButton>
        </>
    );

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <StarBorderPurple500Icon />
                </ListItemIcon>
                <ListItemText primary="Classificação" />
                {show ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={show} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {createStarList(100, 1)}
                    {createStarList(200, 2)}
                    {createStarList(300, 3)}
                    {createStarList(400, 4)}
                    {createStarList(500, 5)}
                </List>
            </Collapse>
        </>
    );
};
