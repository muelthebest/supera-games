import * as React from "react";
import { CartGame } from "../components/atoms/CartGames";

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

import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 18,
    },
}));

export function Home() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        SUPERA GAMES
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Search sx={{  }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                          </SearchIconWrapper>
                        <StyledInputBase placeholder="Procurar ..." />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="primary">
                        <StyledBadge badgeContent={4} color="secondary" >
                            <Icon
                                component={CartGame}
                                fontSize="large"
                                sx={{ marginRight: 3 }}
                            />
                        </StyledBadge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
